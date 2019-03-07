import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import TocItem from './TocItem'
import AscSection from './AscSection'
import StatItem from './StatItem'

export const styledSection = (colorSelector) => withStyles(theme => ({
  heading: { borderColor: colorSelector(theme).main }
}))(({ classes, children, ...other }) => (
  <AscSection className={classes.heading} {...other}>{children}</AscSection>
))

export const styledTocItem = (colorSelector) => withStyles(theme => {
  const color = colorSelector(theme)
  return {
    root: {
      "&:hover": {
        borderLeftColor: color.main,
        backgroundColor: "transparent"
      },
      "&:hover > div > span": {
        color: color.main
      },
      "&:focus": {
        backgroundColor: "transparent"
      }
    }
  }
})(({ classes, ...other }) => (
  <TocItem className={classes.root} textClassName={classes.text} {...other} />
))

export const styledStatItem = (colorSelector) => withStyles(theme => {
  const color = colorSelector(theme)
  return {
    key: {
      color: color.main
    }
  }
})(({ classes, ...other }) => (
  <StatItem {...other} classes={{ key: classes.key }} />
))
