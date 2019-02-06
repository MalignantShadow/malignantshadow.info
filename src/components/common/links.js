import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import GhIcon from './icons/GitHub'
import BbIcon from './icons/BitBucket'

export const IconLink = ({children, href, newTab, tooltip, ...other}) => (
  <Tooltip title={tooltip}>
    <IconButton {...other} component="a" target={newTab && "_blank"} rel={newTab && "noopener noreferrer"} href={href}>
      {children}
    </IconButton>
  </Tooltip>
)

IconLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
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
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  repo: PropTypes.string.isRequired,
  IconProps: PropTypes.object
}

GitHubLink.defaultProps = {
  icon: GhIcon
}

const rbStyles = theme => ({
  icon: { marginRight: theme.spacing.unit }
})

export const RepoButton = withStyles(rbStyles)(({classes, type, repo, ...other}) => {

  let Icon, href, host
  if(type === "github") {
    Icon = GhIcon
    href = `https://www.github.com/${repo}`
    host = "GitHub"
  } else if(type === "bitbucket") {
    Icon = BbIcon
    href = `https://www.bitbucket.com/${repo}`
    host = "BitBucket"
  }

  return (
    <Button href={href} {...other} component="a" target="_blank" rel="noopener noreferrer">
      <Icon className={classes.icon}/>
      View on {host || type}
    </Button>
  )
})

RepoButton.propTypes = {
  type: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  href: PropTypes.string
}