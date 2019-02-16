import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import { SiteBreadcrumbs } from '../common/app'
import Asc from './icons/Asc'
import routing from '../../lib/asc/routeInfo'

export default withStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "row"
  },
  stretch: {
    flexGrow: 1
  },
  content: {
    marginTop: theme.spacing.unit * 2
  },
  toc: {
    width: 225
  }
}))(({classes, children, rightContent}) => (
  <div className={classes.root}>
    <div className={classes.wrapper}>
      <SiteBreadcrumbs icon={Asc}>{routing}</SiteBreadcrumbs>
      <div className={classes.stretch}/>
      <div className={classes.rightContent}>{rightContent}</div>
    </div>
    <div className={classes.content}>
      {children}
    </div>
  </div>
))