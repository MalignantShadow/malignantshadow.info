import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TermBase from './TermBase'
import * as conditions from '../../../lib/asc/game/conditions'

export default withStyles(theme => {
  const color = theme.asc.term.condition
  return {
    term: {
      color: color.main,
      borderColor: color.main,
    },
    category: {
      backgroundColor: color.main,
      color: "#FFF",
      borderColor: color.light,
    },
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
      classes={{
        term: classes.term,
        category: classes.category
      }}
    >
      <ul className={classes.ul}>
        {condition.desc.map((e, i) => (
          <li key={i}><Typography>{e}</Typography></li>
        ))}
      </ul>
    </TermBase>
  )
})
