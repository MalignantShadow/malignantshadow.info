import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

export default withStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  }
}))(({classes, className, children, ...other}) => (
  <Paper className={classNames(classes.root, className)} {...other}>
    {children}
  </Paper>
))