import React from 'react'

import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default withStyles(theme => ({
  title: {}
}))(({classes, children, title, className, ...other}) => (
  <Typography {...other}>
    <b className={classes.title}>{title}{title && "."}</b> {children}
  </Typography>
))
