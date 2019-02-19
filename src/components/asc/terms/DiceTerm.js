import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TermBase from './TermBase'
import { styleTerm, styleCategory } from './util'

export default withStyles(theme => ({
  ...styleTerm(theme.asc.term.dice),
  ...styleCategory(theme.asc.term.dice),
  tooltip: {
    width: 350
  },
  content: {
    display: "flex",
    flexDirection: "row"
  },
  stat: {
    "&:not(:first-child)": {
      marginLeft: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      borderLeft: `2px solid ${theme.asc.term.dice.main}`
    }
  },
}))(({classes, dice, ...other}) => (
  <TermBase
    name={dice.toString()}
    category="Dice Expression"
    classes={{
      tooltip: classes.tooltip,
      term: classes.term,
      category: classes.category,
      content: classes.content
    }}
    {...other}
  >
    <Typography className={classes.stat}>
      <b>Range</b>: {dice.rangeString}
    </Typography>
    <Typography className={classes.stat}>
      <b>Average</b>: {dice.avg}
    </Typography>
  </TermBase>
))
