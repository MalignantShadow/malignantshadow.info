import React from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { appbarRelativeStyles } from '../../components/common/util'
import { SiteBreadcrumbs } from '../common/app'
import Asc from './icons/Asc'
import routing from '../../lib/asc/routeInfo'
import { scrollToId } from '../../lib/common/scrolling'
import TableOfContents from './TableOfContents'

const tocWidth = 320

export default withStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    "@media print": {
      display: "none"
    }
  },
  stretch: {
    flexGrow: 1
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      marginLeft: tocWidth + theme.spacing.unit * 3
    }
  },
  content: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 16,
    flexGrow: 1,
    "@media print": {
      marginTop: 0
    }
  },
  toc: {
    width: tocWidth,
    ...appbarRelativeStyles(theme, height => ({
      // 100vh - padding - appbar
      maxHeight: `calc(100vh - ${theme.spacing.unit * 4}px - ${height}px)`
    })),
    overflowY: "auto",
    position: "fixed"
  },
  breadcrumbs: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 0
  },
  breadcrumbLink: {
    color: theme.asc.accent,

    "&:hover": {
      color: theme.asc.accentText
    }
  }
}))(withRouter(({ classes, children, location, location: { state: routeState }, rightContent, toc, BreadcrumbProps }) => {
  React.useEffect(() => {
    // if we refresh the page, routeState will be undefined
    if (!routeState) return
    scrollToId(location.hash.substring(1))
  }, [])

  return (
    <div className={classes.root}>
      {toc &&
        <Hidden smDown>
          <TableOfContents className={classes.toc}>{toc}</TableOfContents>
        </Hidden>
      }
      <div className={classes.contentWrapper}>
        <div className={classes.wrapper}>
          <SiteBreadcrumbs icon={Asc} className={classes.breadcrumbs} classes={{ link: classes.breadcrumbLink }} {...BreadcrumbProps}>{routing}</SiteBreadcrumbs>
          <div className={classes.stretch} />
          <div className={classes.rightContent}>{rightContent}</div>
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  )
}))
