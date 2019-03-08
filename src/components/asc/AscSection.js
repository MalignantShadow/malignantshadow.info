import React from 'react'

import AscHeading from './AscHeading'

export default ({ children, title, ...other }) => (
  <React.Fragment>
    <AscHeading {...other}>{title}</AscHeading>
    {children}
  </React.Fragment>
)
