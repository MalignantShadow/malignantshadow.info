import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: "100vh",
    width: "100%"
  }
})

export default withStyles(styles)(({classes, className, children, ...other}) => (
  <div className={classNames(classes.root, className)} {...other}>
    {children}
  </div>
))