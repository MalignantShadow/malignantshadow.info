import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import MuiBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { getTitle } from '../../../lib/routing'

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

export default withRouter(withStyles(styles)(({classes, children, buttons, toolbarClassName, routing, onDrawerOpen, location,  history, match, staticContext, ...other}) => (
  <MuiBar {...other}>
    <Toolbar className={classNames(classes.bar, toolbarClassName)}>
      <Hidden lgUp implementation="css">
        <IconButton onClick={onDrawerOpen} className={classes.menuButton}>
          <MenuIcon/>
        </IconButton>
      </Hidden>
      { !children ?
        <Typography variant="h6" color="inherit" noWrap>{getTitle(routing, location.pathname)}</Typography>
      :
        children
      }
      <div className={classes.stretch}/>
      <div>{buttons}</div>
    </Toolbar>
  </MuiBar>
)))