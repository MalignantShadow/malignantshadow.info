import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from "@material-ui/core/styles"
import { indigo, purple } from '@material-ui/core/colors'

import AppWrapper from './components/common/AppWrapper'
import AboutMe from './pages/www/AboutMe'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple
  }
})

const Portfolio = () => (
  <AppWrapper theme={theme}>
    <AboutMe/>
  </AppWrapper>
)


ReactDOM.render(<Portfolio />, document.getElementById('root'));
//serviceWorker.unregister();
