import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export default (props) => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <rect x="20" y="45" width="18" height="55"/>
    <rect x="62" y="45" width="18" height="55"/>

    <path
      d="M 50, 0
       L 0, 30
       L 0, 50
       L 50, 20
       L 100, 50
       L 100, 30"
    />
  </SvgIcon>
)