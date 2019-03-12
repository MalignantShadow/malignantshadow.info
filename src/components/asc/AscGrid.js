import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export default withStyles(theme => ({
  item: {
    padding: theme.spacing.unit * 1.5
  },
  borderNormal: {
    border: `1px solid ${theme.palette.divider}`
  },
  borderMetal: {
    ...theme.asc.mixin.metalBorder()
  },
  top: { paddingBottom: theme.spacing.unit / 2 },
  bottom: { paddingTop: theme.spacing.unit / 2 },
  left: { paddingRight: theme.spacing.unit / 2 },
  right: { paddingLeft: theme.spacing.unit / 2 },
}))(({ classes, className, children, border, noPadding, top, right, bottom, left, ...other }) => (
  <Grid
    className={classNames(classes.root, {
      [classes.borderNormal]: border === "normal",
      [classes.borderMetal]: border === "metal",
      [classes.item]: other.item && !noPadding,
      [classes.top]: top,
      [classes.bottom]: bottom,
      [classes.right]: right,
      [classes.left]: left,
    }, className)}
    {...other}
  >
    {children}
  </Grid>
))
