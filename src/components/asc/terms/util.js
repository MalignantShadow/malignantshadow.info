import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export const stats = (colorSelector) => withStyles(theme => {
  const color = colorSelector(theme)
  return {
    root: { //TODO: reused a bunch, make helper function
      display: "flex",
      paddingBottom: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      borderBottom: `3px solid ${color.main}`
    },
    stat: {
      "&:not(:first-child)": {
        marginLeft: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        borderLeft: `2px solid ${color.main}`
      }
    }
  }
})(({classes, children}) => (
  <div className={classes.root}>
    {children && children.map((e, i) => (
      e && <Typography key={i} className={classes.stat}>{e}</Typography>
    ))}
  </div>
))

export const styleTerm = (color, other, key = "term") => ({
  [key]: {
    color: color.main,
    borderColor: color.main,
    ...other
  }
})

export const styleCategory = (color, other, key = "category") => ({
  [key]: {
    backgroundColor: color.main,
    borderColor: color.light,
    ...other
  },
})
