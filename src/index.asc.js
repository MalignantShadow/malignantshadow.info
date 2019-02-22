import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'
import smoothscroll from 'smoothscroll-polyfill'
//import * as serviceWorker from './serviceWorker';

import { withRouter, Link, Switch } from 'react-router-dom'

import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import * as colors from '@material-ui/core/colors'
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
import routes from "./lib/asc/routeInfo"
import pages from "./lib/asc/pageInfo"
import { useRoutes } from "./lib/routing"

smoothscroll.polyfill()

const makeColor = (color, values = [300, 500, 700], other) => ({
  light: color[values[0]],
  main: color[values[1]],
  dark: color[values[2]],
  ...other
})

const primary = {
  light: colors.grey[800],
  main: colors.grey[900],
  dark: "#000"
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: primary,
    secondary: colors.deepPurple
  },
  asc: {
    abilities: makeColor(colors.purple),
    skills: makeColor(colors.orange),
    classifications: makeColor(colors.teal),
    rules: makeColor(colors.red),
    term: {
      ability: makeColor(colors.purple),
      feature: makeColor(colors.deepPurple),
      condition: makeColor(colors.green),
      place: makeColor(colors.blue),
      monster: makeColor(colors.red),
      dice: makeColor(colors.indigo)
    },
    class: {
      shadowborne: primary
    }
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
    borderRight: "1px solid",

    [theme.breakpoints.down("md")]: {
      borderRight: "none"
    }
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
})(withRouter(({ classes, path, title, location }) => {
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
    mobileOpen: false,
  }

  setDrawerState = (open) => () => this.setState({ mobileOpen: open })

  render() {
    const { mobileOpen } = this.state
    const { classes } = this.props
    return (
      <AppWrapper theme={theme}>
        <AppBar
          toolbarClassName={classes.toolbar}
          onDrawerOpen={this.setDrawerState(true)}
        >
          <Asc />
          <Typography className={classes.title} variant="h5" color="inherit">Tabletop</Typography>
          <Hidden mdDown>
            {routes.map((e, i) => (
              !e.children ? null : (<ToolbarButton key={i} {...e} />)
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
          {routes}
        </AppDrawer>
        <AppContent classes={{ root: classes.contentRoot }}>
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
