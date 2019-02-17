import React from 'react'

import Typography from '@material-ui/core/Typography'

export default ({children, ...other}) => (
  <ul {...other}>
    {children.map((e, i) => (
      <li key={i}><Typography>{e}</Typography></li>
    ))}
  </ul>
)
