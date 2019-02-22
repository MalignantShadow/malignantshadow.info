import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TermBase from './TermBase'
import * as classifications from '../../../lib/asc/game/classifications'
import { styleCategory } from './util'

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
    display: "flex",
    flexDirection: "column",
    paddingBottom: theme.spacing.unit,
    borderBottom: `3px solid ${theme.asc.classifications.main}`,
    marginBottom: theme.spacing.unit * 2
  },
  statsWrapperRow: {
      display: "flex",
      flexDirection: "row"
  },
  rowGutter: {
    marginBottom: theme.spacing.unit
  },
  stat: {
    "&:not(:first-child)": {
      marginLeft: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      borderLeft: `2px solid ${theme.asc.classifications.main}`
    }
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
      <div className={classes.statsWrapper}>
        <div className={classNames(classes.statsWrapperRow, classes.rowGutter)}>
          <Typography className={classes.stat}>
            <b>Elemental Affinity</b>: <Span>{affinity}</Span>
          </Typography>
          <Typography className={classes.stat}>
            <b>Archetypes</b>: {archetypes.join(", ")}
          </Typography>
          <Typography className={classes.stat}>
            <b>Hit Dice</b>: <span className={classes.dice}>{hitDice.toString()}</span>
          </Typography>
        </div>
        <Typography>
          <b>Saving Throws</b>: {savingThrows.map(e => e.toUpperCase()).join(", ")}
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
            { Array.isArray(skills) ? (skills.map((e, i) => (
              <React.Fragment key={i}>
                {e}{i < skills.length - 1 && ", " }
              </React.Fragment>
            ))) : (
              `${skills.starting} + ${skills.choices} from ${skills.pool.join(", ")}`
            )}
        </Typography>
      </div>
      <div className={classes.desc}>
        <Desc disableTerms noParagraph/>
      </div>
    </TermBase>
  )
})
