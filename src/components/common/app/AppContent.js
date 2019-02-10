import React from 'react'

import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
  root: {
    marginTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      marginTop: 48,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
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