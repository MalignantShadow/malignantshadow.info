import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TermBase from './TermBase'
import * as skills from '../../../lib/asc/game/skills'
import { styleTerm, styleCategory } from './util'
import { slug } from '../../../lib/routing'

export default withStyles(theme => {
  const color = theme.asc.skills
  return {
    ...styleTerm(color),
    ...styleCategory(color, { color: "#000" }),
    root: {
      display: "flex",
      flexDirection: "column"
    },
    statsWrapper: { //TODO: reused a bunch, make helper function
      display: "flex",
      paddingBottom: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      borderBottom: `3px solid ${color.main}`
    },
    stat: {
      "&:not(:first-child)": {
        marginLeft: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        borderLeft: `2px solid ${color.main}`
      }
    }
  }
})(({classes, term, ...other}) => {
  const {name, aptitude, caption, desc: Desc} = skills[term]
  return (
    <TermBase
      name={name}
      category="Skill"
      href={`/ref/skills#${slug(name)}`}
      classes={{
        root: classes.root,
        term: classes.term,
        category: classes.category
      }}
    >
      <div className={classes.statsWrapper}>
        <Typography className={classes.stat}><b>Aptitude</b>: {aptitude}</Typography>
        { caption &&
          <Typography className={classes.stat}><i>{caption}</i></Typography>
        }
      </div>
      <Desc disableTerms noParagraph/>
    </TermBase>
  )
})
