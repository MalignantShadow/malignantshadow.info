import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import TermBase from './TermBase'
import * as conditions from '../../../lib/asc/game/conditions'
import { styleTerm, styleCategory } from './util'

export default withStyles(theme => {
  const color = theme.asc.term.condition
  return {
    ...styleTerm(color),
    ...styleCategory(color, { color: "#FFF" }),
    root: {
      "& > ul": {
        margin: 0,
        paddingLeft: theme.spacing.unit * 3
      }
    }
  }
})(({classes, term, ...other}) => {
  const condition = conditions[term]
  const Desc = condition.desc
  return (
    <TermBase
      name={condition.name}
      category="Condition"
      href={`/ref/conditions#${term}`}
      classes={{
        term: classes.term,
        category: classes.category
      }}
      {...other}
    >
      <div className={classes.root}>
        <Desc disableTerms/>
      </div>
    </TermBase>
  )
})
