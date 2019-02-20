import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import AscHeading from './AscHeading'

export default withStyles(theme => ({
  heading: {}
}))(({classes, children, title, ...other}) => (
  <React.Fragment>
    <AscHeading className={classes.heading} {...other}>{title}</AscHeading>
    {children}
  </React.Fragment>
))
