import React from 'react'

import AppWrapper from './AppWrapper'
import AppBar from './AppBar'
import AppDrawer from './AppDrawer'

class App extends React.Component {

  state = {
    mobileOpen: false
  }

  setDrawerState = (open) => () => this.setState({mobileOpen: open})

  //children = routing, passed to drawer
  render() {
    const { children, theme, title, barButtons } = this.props
    const { mobileOpen } = this.state
    return (
      <AppWrapper theme={theme}>
        <AppBar
          title={title}
          onDrawerOpen={this.setDrawerState(true)}
          buttons={barButtons}
        />
        <AppDrawer
          mobileOpen={mobileOpen}
          onClose={this.setDrawerState(false)}
        >
          {children}
        </AppDrawer>
      </AppWrapper>
    )
  }
}

export default App