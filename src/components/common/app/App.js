import React from 'react'
import { Switch } from 'react-router-dom'

import AppBar from './AppBar'
import AppDrawer from './AppDrawer'
import AppContent from './AppContent'

import { useRoutes } from "../../../lib/routing"

class App extends React.Component {

  state = {
    mobileOpen: false
  }

  setDrawerState = (open) => () => this.setState({ mobileOpen: open })

  render() {
    const { children, pageInfo, barButtons, DrawerProps } = this.props
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
        <AppContent>
          <Switch>
            {useRoutes(children, pageInfo)}
          </Switch>
        </AppContent>
      </React.Fragment>
    )
  }
}

export default App