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

const routing = [
  {
    title: "About Me",
    path: "/",
    exact: true
  }, {
    title: "Projects",
    path: "/projects",
    children: [
      { title: "Ascension", path: "Ascension" },
      { title: "Akensha", path: "Akensha" },
      { title: "DeityCreative", path: "iD_Creative" },
      { title: "ItemMail", path: "ItemMail" },
    ]
  }, { // 404
    path: "",
    hidden: true
  }
]

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
    DrawerItemProps={{title: "Caleb Downs", subtitle: "aka Shad0w"}}
  >
    {routing}
  </App>
))



ReactDOM.render(<Portfolio />, document.getElementById('root'));
//serviceWorker.unregister();
