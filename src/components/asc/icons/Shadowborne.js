import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export default (props) => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <path fill="currentColor"
      d="M 5,20
         A 49,49 0,1,1 5,80
         A 36,36 0,1,0 5,20 z"
    />
  </SvgIcon>
)
