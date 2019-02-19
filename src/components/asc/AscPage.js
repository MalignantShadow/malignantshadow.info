import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { appbarRelativeStyles } from '../../components/common/util'
import { SiteBreadcrumbs } from '../common/app'
import Asc from './icons/Asc'
import routing from '../../lib/asc/routeInfo'

import TableOfContents from './TableOfContents'

export default withStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "row"
  },
  stretch: {
    flexGrow: 1
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing.unit * 2,
  },
  content: {
    marginBottom: theme.spacing.unit * 16,
    flexGrow: 1
  },
  toc: {
    marginRight: theme.spacing.unit * 4,
    minWidth: 275,
    ...appbarRelativeStyles(theme, height => ({
      // 100vh - padding - appbar
      maxHeight: `calc(100vh - ${theme.spacing.unit * 4}px - ${height}px)`
    })),
    overflowY: "auto",
    position: "fixed"
  },
}))(({classes, children, rightContent, toc}) => {

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SiteBreadcrumbs icon={Asc}>{routing}</SiteBreadcrumbs>
        <div className={classes.stretch}/>
        <div className={classes.rightContent}>{rightContent}</div>
      </div>
      <div className={classes.contentWrapper}>
        {toc &&
          <Hidden smDown>
            <TableOfContents className={classes.toc} children={toc}/>
          </Hidden>
        }
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  )
})
