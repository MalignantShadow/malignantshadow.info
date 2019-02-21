import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { appbarRelativeStyles } from '../util'

export default withStyles(theme => ({
  root: {
    ...appbarRelativeStyles(theme, height => ({
      marginTop: height
    })),
    "@media print": {
      marginTop: 0
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 240
    }
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  content: {
    width: theme.breakpoints.values.lg,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.down('md')]: {
      width: "100%"
    }
  }
}))(({classes, children}) => (
  <div className={classes.root}>
    <div className={classes.contentWrapper}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  </div>
))
