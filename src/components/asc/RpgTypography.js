import React from 'react'
import classNames from 'classnames'

import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export default withStyles(theme => ({
  root: {
    "&::first-letter": {
      marginLeft: theme.spacing.unit * 6
    }
  }
}))(({classes, children, title, className, ...other}) => (
  <Typography className={classNames(classes.root, className)} {...other}>
    <b>{title}</b>. {children}
  </Typography>
))
