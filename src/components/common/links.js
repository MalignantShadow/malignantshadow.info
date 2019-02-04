import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import GhIcon from './icons/GitHub'

export const IconLink = ({children, href, newTab, tooltip, ...other}) => (
  <Tooltip title={tooltip}>
    <IconButton {...other} component="a" target={newTab && "_blank"} href={href}>
      {children}
    </IconButton>
  </Tooltip>
)

IconLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  tooltip: PropTypes.string
}

export const GitHubLink = ({icon: Icon, repo, IconProps, ...other}) => (
  <IconLink {...other} href={`https://www.github.com/${repo}`}>
    <Icon color="inherit" {...IconProps}/>
  </IconLink>
)

GitHubLink.propTypes = {
  icon: PropTypes.element,
  repo: PropTypes.string.isRequired,
  IconProps: PropTypes.object
}

GitHubLink.defaultProps = {
  icon: GhIcon
}