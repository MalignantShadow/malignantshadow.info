import React from 'react'

import { withStyles } from "@material-ui/core/styles/index"

export default withStyles(theme => ({
  root: {
    padding: theme.spacing.unit
  }
}))(({classes, children}) => (
  <div className={classes.root}>
    {children}
  </div>
))