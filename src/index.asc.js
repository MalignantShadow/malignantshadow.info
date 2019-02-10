import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import InvertColorsIcon from '@material-ui/icons/InvertColors'

import App from './components/common/app/App'
import AppWrapper from './components/common/app/AppWrapper'
import routing from "./lib/asc/routeInfo"
import pages from "./lib/asc/pageInfo"

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
  barIcon: {
    color: theme.palette.getContrastText(theme.palette.primary.main)
  }
})

class AscRef extends React.Component {

  state = {
    lightsOn: true
  }

  handleLights = () => {
    this.setState({ lightsOn: !this.state.lightsOn  })
  }

  render() {
    const { lightsOn } = this.state
    const { classes } = this.props
    const theme = lightsOn ? light : dark
    return (
      <AppWrapper theme={theme}>
        <App
          pageInfo={pages}
          barButtons={
            <React.Fragment>
              <Tooltip placement="bottom" title={`Turn ${lightsOn ? "off" : " on"} the lights`}>
                <IconButton onClick={this.handleLights}>
                  <InvertColorsIcon className={classes.barIcon}/>
                </IconButton>
              </Tooltip>
            </React.Fragment>
          }
          DrawerProps={{
            title: "Ascension: Tabletop",
            subtitle: "Edition 0"
          }}
        >
          {routing}
        </App>
      </AppWrapper>
    )
  }
}

AscRef = withStyles(styles)(AscRef)

ReactDOM.render(<AscRef />, document.getElementById('root'));
//serviceWorker.unregister();
