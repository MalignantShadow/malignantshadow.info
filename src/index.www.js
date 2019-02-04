import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { withStyles, createMuiTheme } from "@material-ui/core/styles"
import BookIcon from '@material-ui/icons/Book'

import { GitHubLink } from './components/common/links'

import { indigo, purple } from '@material-ui/core/colors'

import App from './components/common/App'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple
  }
})

const styles = () => ({
  barIcon: {
    color: "inherit"
  }
})


const Portfolio = withStyles(styles)(({classes}) => (
  <App
    title="MalignantShadow"
    theme={theme}
    barButtons={[
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
))



ReactDOM.render(<Portfolio />, document.getElementById('root'));
//serviceWorker.unregister();
