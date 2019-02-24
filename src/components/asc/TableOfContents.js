import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

export default withStyles(theme => ({
  root: {
    "@media print": {
      display: "none"
    },
    boxShadow: "none",
    border: `1px solid ${theme.palette.divider}`
  }
}))(({ classes, children, className, ...other }) => (
  <Paper square className={classNames(classes.root, className)} {...other}>
    <List disablePadding>
      {children}
    </List>
  </Paper>
))
