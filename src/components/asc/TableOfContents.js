import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

export default withStyles(theme => ({

}))(({classes, children, ...other}) => (
  <Paper square {...other}>
    <List disablePadding>
      {children}
    </List>
  </Paper>
))
