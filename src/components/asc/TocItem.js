import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AscLink from './AscLink'

export default withStyles(theme => ({
  root: {
    borderLeft: "3px solid transparent",
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,

    "& > span:last-of-type": { //the touchRipple <span>
      left: -3
    }
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 500
  },
  text: {},
  depth0: {},
  depth1: { paddingLeft: theme.spacing.unit * 4 },
  depth2: { paddingLeft: theme.spacing.unit * 6 },
  depth3: { paddingLeft: theme.spacing.unit * 8 }
}))(({ classes, className, title, children, depth = 0, href, to }) => (
  <ListItem
    button
    className={classNames(classes.root, classes[`depth${depth}`], className)}
    component={href ? AscLink : Link}
    href={href}
    to={to}
  >
    <ListItemText primaryTypographyProps={{
      variant: "body2", component: "span", className: classNames({
        [classes.title]: title
      })
    }}>{children}</ListItemText>
  </ListItem>
))
