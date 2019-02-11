import React from 'react'

import { withStyles, withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default withStyles(theme => ({
  root: {

  },
  title: {
    padding: theme.spacing.unit / 2,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  }
}))(withTheme()(({classes, children, theme, title, ...other}) => (
  <Paper {...other}>
    <Typography className={classes.title} variant="h5" align="center">
      {title}
    </Typography>
    {children}
  </Paper>
)))