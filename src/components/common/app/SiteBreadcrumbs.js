import React from 'react'

import { Link, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import NavigateNext from '@material-ui/icons/NavigateNext'

const getBreadcrumbs = (includeRoot, routing, path) => {
  if(!routing || routing.length === 0) return []
  const breadcrumbs = []
  let resolved = ""
  for(let r of routing) {
    console.log(resolved)
    if(path.startsWith(resolved || r.path)) {
      if(r.path === "/" && !includeRoot) break
      resolved += r.path
      console.log(resolved)
      breadcrumbs.push({path: r.path, title: r.title})
      if(r.children)
        breadcrumbs.concat(getBreadcrumbs(includeRoot, r.children, path))
      else break
    }
  }
  return breadcrumbs.map((e, i) => (
    i === breadcrumbs.length + 1 ? (
      <MuiLink color="inherit" component={Link} to={e.path}>{e.title}</MuiLink>
    ) : (
      <Typography color="textPrimary">{e.title}</Typography>
    )
  ))
}

export default withStyles(theme => ({
  paper: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
}))(withRouter(({classes, children, location, history, staticContext, icon: Icon, PaperProps, IconProps, ...other}) => (
  <Paper className={classes.paper} {...PaperProps}>
    <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="Breadcrumb" {...other}>
      {Icon && <MuiLink component={Link} to="/"><Icon {...IconProps}/></MuiLink>}
      {getBreadcrumbs(false, children, location.pathname)}
    </Breadcrumbs>
  </Paper>
)))