import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Blake(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 255 255" width="255" height="255">
      <circle cx="128" cy="128" r="75" stroke="currentColor" strokeWidth="10" fill="none"/>

      <rect x="120" y="0" width="14" height="40"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(45, 128, 128)"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(90, 128, 128)"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(135, 128, 128)"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(180, 128, 128)"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(225, 128, 128)" />
      <rect x="120" y="0" width="14" height="40" transform="rotate(270, 128, 128)"/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(315, 128, 128)"/>

      <path d="M 75 158
               A 37 37 0 1 0 75 98
               A 60 60 0 1 1 75 158" />
    </SvgIcon>
  )
}

export default Blake
