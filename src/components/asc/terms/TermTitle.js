import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

export default withStyles(theme => ({
  subtitle: {
    marginLeft: theme.spacing.unit,
    color: fade(theme.palette.getContrastText(theme.palette.primary.main), .65),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 500
  }
}))(({classes, children, subtitle}) => (
  <React.Fragment>
    <span>{children}</span>
    <span className={classes.subtitle}>{subtitle}</span>
  </React.Fragment>
))
