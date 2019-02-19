import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import TocItem from './TocItem'

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
})(({classes, ...other}) => (
  <TocItem className={classes.root} textClassName={classes.text} {...other}/>
))
