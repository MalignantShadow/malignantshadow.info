import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from "@material-ui/core/styles"
import { indigo, deepOrange } from '@material-ui/core/colors'

import AppWrapper from './components/common/AppWrapper'
import AboutMe from './pages/www/AboutMe'
import Skills from './pages/www/Skills'
import Projects from './pages/www/Projects'
import Footer from './pages/www/Footer'

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

class Portfolio extends React.Component {

  skillsRef = React.createRef()
  scrollStart = 0
  scrollDuration = 750
  scrollTo = 0
  raf = null

  scroll = () => {
    const now = Date.now().valueOf()
    if(now > this.scrollStart + this.scrollDuration) {
      cancelAnimationFrame(this.raf)
      return
    }
    const normalStart = now - this.scrollStart
    console.log(this.scrollTo, normalStart, this.scrollDuration, normalStart / this.scrollDuration)
    document.documentElement.scrollTop = this.scrollTo * (normalStart/ this.scrollDuration)
    this.raf = requestAnimationFrame(this.scroll)
  }

  startScroll = () => {
    this.scrollStart = Date.now().valueOf()
    this.scrollTo = this.skillsRef.current.getBoundingClientRect().top + window.pageYOffset
    console.log(this.scrollTo)
    this.raf = requestAnimationFrame(this.scroll)
  }

  render() {
    const { theme } = this.props
    return (
      <AppWrapper theme={theme}>
        <AboutMe
          onSeeMoreClick={this.startScroll}
        />
        <Skills
          ref={this.skillsRef}
        />
        <Projects/>
        <Footer/>
      </AppWrapper>
    )
  }

}

ReactDOM.render(<Portfolio theme={theme}/>, document.getElementById('root'));
//serviceWorker.unregister();
