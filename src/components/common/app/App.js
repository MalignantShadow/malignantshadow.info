import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import AppBar from './AppBar'
import AppDrawer from './AppDrawer'

import { resolve } from "../../../lib/routing"

const styles = theme => ({
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
    width: theme.breakpoints.values.md,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    }
  }
})

const makeRoute = ({ ...props }) => <Route {...props}/>

const getRoutes = (routing, parent, pageInfo) => {
  if(!routing || routing.length === 0) return []
  const routes = []
  routing.forEach((e, i) => {
    if (e === "divider") return

    const { path, page, exact, component, children } = e
    if (children)
      routes.concat(getRoutes(children, path, pageInfo[page]))
    else if (component)
      routes.push(makeRoute({
        path: resolve(parent, path),
        exact,
        component: pageInfo[page],
        key: i
      }))
  })
  return routes
}

class App extends React.Component {

  state = {
    mobileOpen: false
  }

  setDrawerState = (open) => () => this.setState({ mobileOpen: open })

  render() {
    const { children, pageInfo, classes, barButtons, DrawerProps } = this.props
    const { mobileOpen } = this.state
    return (
      <React.Fragment>
        <AppBar
          routing={children}
          onDrawerOpen={this.setDrawerState(true)}
          buttons={barButtons}
        />
        <AppDrawer
          {...DrawerProps}
          mobileOpen={mobileOpen}
          onClose={this.setDrawerState(false)}
        >
          {children}
        </AppDrawer>
        <div className={classes.root}>
          <div className={classes.contentWrapper}>
            <div className={classes.content}>
              <Switch>
                {getRoutes(children, undefined, pageInfo)}
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)