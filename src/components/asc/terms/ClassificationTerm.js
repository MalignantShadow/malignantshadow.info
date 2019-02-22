import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import SkillTerm from './SkillTerm'
import TermBase from './TermBase'
import * as classifications from '../../../lib/asc/game/classifications'
import { stats, styleCategory } from './util'

const colorSelector = theme => theme.asc.classifications
const ClassStats = stats(colorSelector)

const classSpan = (id) => withStyles(theme => ({
  root: { color: theme.asc.class[id].main },
  bold: { fontWeight: 500 }
}))(({classes, children, bold}) =>
 <span className={classNames(classes.root, {[classes.bold]: bold})}>
   {children}
 </span>
)

export default withStyles(theme => ({
  ...styleCategory(theme.asc.classifications),
  statsWrapper: {
    borderBottom: "none",
    paddingBottom: 0,
    marginBottom: theme.spacing.unit
  },
  topContent: {
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    borderBottom: `3px solid ${theme.asc.classifications.main}`
  },
  dice: {
    color: theme.asc.term.dice.main,
    fontWeight: 500
  }
}))(({classes, term, plural, ...other}) => {
  const {
    name,
    aspect,
    desc: Desc,
    icon,
    affinity,
    archetypes,
    intrinsics: {hitDice, prof: {savingThrows, weapons, skills}},
  } = classifications[term]
  const Span = classSpan(term)
  return (
    <TermBase
      icon={icon}
      title={name}
      subtitle={`Aspect of ${aspect}`}
      category="classification"
      text={plural ? `${name}s` : name}
      href={`/ref/classifications/${term}`}
      classes={{
        category: classes.category
      }}
      {...other}
    >
      <div class={classes.topContent}>
        <ClassStats classes={{root: classes.statsWrapper}}>
          <React.Fragment>
            <b>Elemental Affinity</b>: <Span>{affinity}</Span>
          </React.Fragment>
          <React.Fragment>
            <b>Archetypes</b>: {archetypes.join(", ")}
          </React.Fragment>
          <React.Fragment>
            <b>Hit Dice</b>: <span className={classes.dice}>{hitDice.toString()}</span>
          </React.Fragment>
        </ClassStats>
        <Typography>
          <b>Saving Throws</b>: {savingThrows.map(e => e.toUpperCase().substring(0, 3)).join(", ")}
        </Typography>
        <Typography>
            <b>Weapons</b>: {weapons.map((e, i) => (
              <React.Fragment key={i}>
                {e}{i < weapons.length - 1 && ", " }
              </React.Fragment>
            ))}
        </Typography>
        <Typography>
            <b>Skills</b>{": "}
            { skills.map((e, i) => (
              <React.Fragment key={i}><SkillTerm term={e} disableHover/>{i < skills.length - 1 ? ", " : ""}</React.Fragment>
            ))}
        </Typography>
      </div>
      <div className={classes.desc}>
        <Desc disableTerms noParagraph/>
      </div>
    </TermBase>
  )
})
