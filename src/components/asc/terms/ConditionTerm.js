import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ConditionText from '../ConditionText'
import TermBase from './TermBase'
import * as conditions from '../../../lib/asc/game/conditions'
import { styleTerm, styleCategory } from './util'

export default withStyles(theme => {
  const color = theme.asc.term.condition
  return {
    ...styleTerm(color),
    ...styleCategory(color, { color: "#FFF" }),
    ul: {
      margin: 0,
      paddingLeft: theme.spacing.unit * 3
    }
  }
})(({classes, term}) => {
  const condition = conditions[term]
  return (
    <TermBase
      name={condition.name}
      category="Condition"
      href={`/ref/conditions#${term}`}
      classes={{
        term: classes.term,
        category: classes.category
      }}
    >
      <ConditionText className={classes.ul}>{condition.desc}</ConditionText>
    </TermBase>
  )
})
