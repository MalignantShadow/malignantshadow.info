import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import AscHeading from './AscHeading'

export default withStyles(theme => ({

}))(({classes, children, title, ...other}) => (
  <React.Fragment>
    <AscHeading {...other}>{title}</AscHeading>
    {children}
  </React.Fragment>
))
