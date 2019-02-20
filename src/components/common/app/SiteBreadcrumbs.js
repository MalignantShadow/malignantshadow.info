import React from 'react'
import classNames from 'classnames'

import { Link, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import NavigateNext from '@material-ui/icons/NavigateNext'

const getBreadcrumbs = (includeRoot, routing, path) => {
  if(!routing || routing.length === 0) return []
  let breadcrumbs = []
  for(let r of routing) {
    if(path.startsWith(r.path)) {
      if(r.path === "/" && !includeRoot) continue
      breadcrumbs.push({path: r.path, title: r.title})
      if(r.children)
        breadcrumbs = breadcrumbs.concat(getBreadcrumbs(includeRoot, r.children, path))

      break
    }
  }
  return breadcrumbs
}

const SiteBreadcrumbs = withStyles(theme => ({
  paper: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    display: "flex",
    userSelect: "none"
  },
  link: {
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}))(withRouter(({classes, className, children, includeRoot, location, history, staticContext, icon: Icon, PaperProps, IconProps, extra, ...other}) => {
  const breadcrumbs = getBreadcrumbs(includeRoot, children, location.pathname).concat(extra)
  return (
    <Paper {...PaperProps} className={classNames(classes.paper, className)} >
      <Breadcrumbs separator={<NavigateNext fontSize="small"/>} aria-label="Breadcrumb" {...other}>
        {Icon && <MuiLink className={classes.icon} component={Link} to="/"><Icon className={classes.icon} fontSize="small" {...IconProps}/></MuiLink>}
        {breadcrumbs.map((e, i) => (
          i < breadcrumbs.length - 1 ? (
            <MuiLink key={i} color="inherit" component={Link} className={classes.link} to={e.path}>{e.title}</MuiLink>
          ) : (
            <Typography key={i} color="textPrimary">{e.title}</Typography>
          )
        ))}
      </Breadcrumbs>
    </Paper>
  )
}))

SiteBreadcrumbs.defaultProps = {
  includeRoot: false
}

export default SiteBreadcrumbs
