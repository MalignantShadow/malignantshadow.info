import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import AppWrapper from './AppWrapper'
import AppBar from './AppBar'
import AppDrawer from './AppDrawer'

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
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
  content: {}
})

const makeRoute = ({ ...props }) => <Route {...props}/>

const getRoutes = (routing, parent) => {
  const routes = []
  routing.forEach((e, i) => {
    if (e === "divider") return

    const { path, exact, component, children } = e
    if (children)
      routes.concat(getRoutes(children, path))
    else
      routes.push(makeRoute({
        path: path.startsWith("/") ? path : `${parent || ""}/${path}`,
        exact,
        component,
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

  //children = routing, passed to drawer and react-router
  render() {
    const { children, classes, theme, title, barButtons, DrawerItemProps } = this.props
    const { mobileOpen } = this.state
    return (
      <AppWrapper theme={theme}>
        <Router>
          <React.Fragment>
            <AppBar
              title={title}
              onDrawerOpen={this.setDrawerState(true)}
              buttons={barButtons}
            />
            <AppDrawer
              mobileOpen={mobileOpen}
              onClose={this.setDrawerState(false)}
              {...DrawerItemProps}
            >
              {children}
            </AppDrawer>
            <div className={classes.root}>
              <div>
                <Switch>
                  {getRoutes(children)}
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </Router>
      </AppWrapper>
    )
  }
}

export default withStyles(styles)(App)