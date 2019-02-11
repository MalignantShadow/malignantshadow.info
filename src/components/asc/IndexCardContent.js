import React from 'react'
import classNames from 'classnames'

import { withStyles } from "@material-ui/core/styles/index"

export default withStyles(theme => ({
  root: {
    padding: theme.spacing.unit
  }
}))(({classes, children, className, ...other}) => (
  <div className={classNames(classes.root, className)} {...other}>
    {children}
  </div>
))