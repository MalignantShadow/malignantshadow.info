import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default withStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing.unit * 1.5
  },
  key: {
    fontSize: theme.typography.pxToRem(11),
    fontWeight: 500,
    color: theme.asc.accent
  },
  value: {

  }
}))(({ classes, className, k, v, ...other }) => (
  <Grid className={classNames(classes.root, className)} {...other} item>
    <Typography className={classes.key}>{k}</Typography>
    <Typography className={classes.value}>{v}</Typography>
  </Grid>
))
