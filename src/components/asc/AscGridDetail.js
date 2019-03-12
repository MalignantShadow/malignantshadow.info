import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Grid from './AscGrid'

export default withStyles(theme => ({
  root: {

  },
  key: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.asc.accent
  },
  value: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.asc.accentText
  }
}))(({ classes, className, k, v, ...other }) => (
  <Grid container className={classNames(classes.root, className)} {...other}>
    <Grid item container direction="column" border="normal">
      <Typography className={classes.key}>{k}</Typography>
      <Typography className={classes.value}>{v}</Typography>
    </Grid>
  </Grid>
))
