import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import MuiBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  bar: { display: "flex" },
  stretch: { flex: "1" }
})

export default withStyles(styles)(({classes, menuButton, title, buttons}) => (
  <MuiBar>
    <Toolbar className={classes.bar}>
      {menuButton}
      <Typography variant="h6" color="inherit" noWrap>{title}</Typography>
      <div className={classes.stretch}/>
      <div>{buttons}</div>
    </Toolbar>
  </MuiBar>
))