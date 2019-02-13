import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

import { SiteBreadcrumbs } from '../common/app'
import TocFrame from './TocFrame'
import TocItem from './TocItem'
import Asc from './icons/Asc'
import routing from '../../lib/asc/routeInfo'
import { slug } from "../../lib/routing"

const getTocItems = (toc, classes, active, depth = 0) => {
  let tocItems = []
  toc.forEach((e) => {
    const hash = e.hash || slug(e.title)
    tocItems.push(<TocItem key={hash} className={classNames(classes.item, {
      [classes.active]: e.hash === active
    })} depth={depth} href={`#${hash}`}>{e.title}</TocItem>)
    if(e.children)
      tocItems = tocItems.concat(getTocItems(e.children, classes, active, depth + 1))
  })
  return tocItems
}

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
  },
  tocItem: {
    color: theme.palette.text.secondary
  },
  tocActive: {
    color: theme.palette.text.primary
  }
}))(({classes, children, rightContent, toc, tocActive}) => (
  <div className={classes.root}>
    <div className={classes.wrapper}>
      <SiteBreadcrumbs icon={Asc}>{routing}</SiteBreadcrumbs>
      <div className={classes.stretch}/>
      <div className={classes.rightContent}>{rightContent}</div>
    </div>
    {toc &&
      <TocFrame className={classes.toc}>
        {getTocItems(toc, {item: classes.tocItem, active: classes.tocActive}, tocActive)}
      </TocFrame>
    }
    <div className={classes.content}>
      {children}
    </div>
  </div>
))