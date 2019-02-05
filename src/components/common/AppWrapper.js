import React from 'react'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

export default ({theme, children}) => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </React.Fragment>
  )
}