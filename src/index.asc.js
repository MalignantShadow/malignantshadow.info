import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'
//import * as serviceWorker from './serviceWorker';

import { withRouter, Link, Switch } from 'react-router-dom'

import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
// import Tooltip from '@material-ui/core/Tooltip'
// import InvertColorsIcon from '@material-ui/icons/InvertColors'

import AppWrapper from './components/common/app/AppWrapper'
import AppBar from './components/common/app/AppBar'
import AppDrawer from './components/common/app/AppDrawer'
import AppContent from './components/common/app/AppContent'
import Asc from './components/asc/icons/Asc'
import routing from "./lib/asc/routeInfo"
import pages from "./lib/asc/pageInfo"
import { useRoutes } from "./lib/routing"

const baseTheme = {
  typography: {
    useNextVariants: true
  }
}

const light =  createMuiTheme({
  ...baseTheme
})

const dark = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark"
  }
})

const styles = theme => ({
  toolbar: {
    marginLeft: 0,
    [theme.breakpoints.up("lg")]: {
      width: theme.breakpoints.values.lg,
      margin: "auto"
    }
  },
  barIcon: {
    color: theme.palette.getContrastText(theme.palette.primary.main)
  },
  title: {
    marginLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 3,
    borderRight: "1px solid"
  },
  contentRoot: {
    [theme.breakpoints.up("lg")]: { marginLeft: 0 }
  }
})

const ToolbarButton = withStyles(theme => {
  const color = theme.palette.getContrastText(theme.palette.primary.main)
  return {
    button: {
      marginLeft: theme.spacing.unit * 3,
      color: fade(color, 0.7),
    },
    active: {
      color: color
    }
  }
})(withRouter(({classes, path, title, location}) => {
  const active = location.pathname.startsWith(path)
  return (
    <Button
      disableRipple
      color="inherit"
      className={classNames(classes.button, {
        [classes.active]: active
      })}
      component={Link}
      to={path}
    >
      {title}
    </Button>
  )
}))

class AscRef extends React.Component {

  state = {
    lightsOn: true,
    mobileOpen: false,
  }

  // handleLights = () => {
  //   this.setState({ lightsOn: !this.state.lightsOn  })
  // }

  setDrawerState = (open) => () => this.setState({ mobileOpen: open })

  render() {
    const { lightsOn, mobileOpen } = this.state
    const { classes } = this.props
    const theme = lightsOn ? light : dark
    return (
      <AppWrapper theme={theme}>
        <AppBar
          toolbarClassName={classes.toolbar}
          onDrawerOpen={this.setDrawerState(true)}
        >
          <Asc/>
          <Typography className={classes.title} variant="h5" color="inherit">Tabletop</Typography>
          <Hidden mdDown>
            {routing.map((e, i) => (
              !e.children ? null : (<ToolbarButton key={i} {...e}/>)
            ))}
          </Hidden>
        </AppBar>
        <AppDrawer
          hideDesktop
          pageInfo={pages}
          mobileOpen={mobileOpen}
          onClose={this.setDrawerState(false)}
          title="Ascension: Tabletop"
          subtitle="Edition 0"
        >
          {routing}
        </AppDrawer>
        <AppContent classes={{root: classes.contentRoot}}>
          <Switch>
            {useRoutes(routes, pages)}
          </Switch>
        </AppContent>
      </AppWrapper>
    )
  }
}

AscRef = withStyles(styles)(AscRef)

ReactDOM.render(<AscRef />, document.getElementById('root'));
//serviceWorker.unregister();
