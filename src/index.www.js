import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from "@material-ui/core/styles"
import { indigo, deepOrange } from '@material-ui/core/colors'

import AppWrapper from './components/common/AppWrapper'
import AboutMe from './pages/www/AboutMe'
import Skills from './pages/www/Skills'
import Projects from './pages/www/Projects'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange
  },
  typography: {
    useNextVariants: true,
  }
})

const scrollbarStyle = document.createElement("style")
scrollbarStyle.innerHTML = `
::-webkit-scrollbar {
  width: 8px
}

::-webkit-scrollbar-track {
  background-color: #111
}

::-webkit-scrollbar-thumb {
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
}
`

document.head.appendChild(scrollbarStyle)

const Portfolio = () => (
  <AppWrapper theme={theme}>
    <AboutMe/>
    <Skills/>
    <Projects/>
  </AppWrapper>
)


ReactDOM.render(<Portfolio />, document.getElementById('root'));
//serviceWorker.unregister();
