import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { withStyles, createMuiTheme } from "@material-ui/core/styles"
import BookIcon from '@material-ui/icons/Book'

import AppWrapper from './components/common/AppWrapper'
import AppBar from './components/common/AppBar'
import { GitHubLink } from './components/common/links'

const theme = createMuiTheme({

})

const styles = () => ({
  barIcon: {
    color: "inherit"
  }
})

const App = withStyles(styles)(({classes}) => (
  <AppWrapper theme={theme}>
    <AppBar
      title={"Title"}
      buttons={[
        <GitHubLink
          key="ghUser"
          className={classes.barIcon}
          repo="MalignantShadow"
          tooltip="My GitHub"
        />,
        <GitHubLink
          key="siteRepo"
          className={classes.barIcon}
          repo={"MalignantShadow/malignantshadow.info"}
          icon={BookIcon}
          tooltip="Website source"
        />
      ]}
    />
  </AppWrapper>
))

ReactDOM.render(<App />, document.getElementById('root'));
//serviceWorker.unregister();
