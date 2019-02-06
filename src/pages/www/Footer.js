import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MuiLink from  '@material-ui/core/Link'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing.unit * -16,
    padding: `${theme.spacing.unit * 24}px 0 ${theme.spacing.unit * 12}px 0`
  }
})

export default withStyles(styles)(({classes}) => (
  <div className={classes.root}>
    <Typography>Hello</Typography>
  </div>
))