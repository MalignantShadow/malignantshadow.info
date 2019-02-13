import React from 'react'

import { withStyles, withTheme } from '@material-ui/core/styles'
import MuiLink from '@material-ui/core/Link'

export default withStyles(theme => ({

}))(withTheme()(({ depth, children, theme, ...other }) => (
  <MuiLink variant={"body2"} style={{paddingLeft: theme.spacing.unit * 2 * depth}} {...other}>
    {children}
  </MuiLink>
)))