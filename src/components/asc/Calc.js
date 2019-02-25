import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default withStyles(theme => ({
  root: {
    color: theme.asc.dice.main,
    display: "inline",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "inherit"
  }
}))(({ classes, children, title, className, ...other }) => (
  <Typography component="span" className={classNames(classes.root, className)} {...other}>
    {children}
  </Typography>
))
