import React from 'react'

import { withStyles, withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const IndexCard = withStyles(theme => ({
  root: {

  },
  title: {
    padding: theme.spacing.unit / 2
  }
}))(withTheme()(({classes, children, theme, title, color, ...other}) => {

  const bgColor = color === "primary"
    ? theme.palette.primary.main
    : color === "secondary" ? theme.palette.secondary.main : color

  const textColor = theme.palette.getContrastText(bgColor)

  return (
    <Paper {...other}>
      <Typography className={classes.title} variant="h5" align="center" style={{backgroundColor: bgColor, color: textColor}}>
        {title}
      </Typography>
      {children}
    </Paper>
  )
}))

IndexCard.defaultProps = {
  color: "primary"
}

export default IndexCard