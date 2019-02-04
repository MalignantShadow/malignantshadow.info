import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import MuiBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  bar: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 240
    }
  },
  stretch: { flex: "1" },
  menuButton: { color: "inherit" }
})

export default withStyles(styles)(({classes, title, buttons, onDrawerOpen}) => (
  <MuiBar>
    <Toolbar className={classes.bar}>
      <Hidden lgUp implementation="css">
        <IconButton onClick={onDrawerOpen} className={classes.menuButton}>
          <MenuIcon/>
        </IconButton>
      </Hidden>
      <Typography variant="h6" color="inherit" noWrap>{title}</Typography>
      <div className={classes.stretch}/>
      <div>{buttons}</div>
    </Toolbar>
  </MuiBar>
))