import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import { appbarRelativeStyles } from "./util"

export default withStyles(theme => ({
  root: {
    ...appbarRelativeStyles(theme, height => ({
      marginTop: -height - (theme.spacing.unit * 2)
    })),
    position: "absolute"
  }
}))(({ classes, id, ...other }) => (
  // eslint-disable-next-line
  <a aria-hidden="true" className={classes.root} id={id} {...other} />
))
