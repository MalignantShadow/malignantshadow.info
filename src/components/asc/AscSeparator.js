import React from 'react'

import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
  root: {
    width: 3,
    height: "100%",
    backgroundColor: theme.palette.divider,
    margin: `0 ${theme.spacing.unit * 2}px`,
  }
}))(({ classes }) => <div className={classes.root} />)
