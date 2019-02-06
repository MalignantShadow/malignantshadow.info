import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Blake(props) {
  const {className, style, light} = props
  const color = props.color || light ? "white" : "black"
  return (
    <SvgIcon className={className} style={style} viewBox="0 0 255 255" width="255" height="255">
      <circle cx="128" cy="128" r="75" stroke={color} strokeWidth="10" fill="none"/>

      <rect x="120" y="0" width="14" height="40" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(45, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(90, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(135, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(180, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(225, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(270, 128, 128)" fill={color}/>
      <rect x="120" y="0" width="14" height="40" transform="rotate(315, 128, 128)" fill={color}/>

      <path d="M 75 158
               A 37 37 0 1 0 75 98
               A 60 60 0 1 1 75 158" fill={color} stroke={color}/>
    </SvgIcon>
  )
}

export default Blake
