import React from 'react'

import Typography from '@material-ui/core/Typography'

export const Poem = ({children, paragraph}) => (
  <React.Fragment>
    {children.map((e, i) => (
      <Typography key={i} paragraph={paragraph && i === children.length - 1}><i>{e}</i></Typography>
    ))}
  </React.Fragment>
)
