import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Heart from '@material-ui/icons/Favorite'

import Blake from '../../components/common/icons/Blake'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing.unit * -16,
    padding: `${theme.spacing.unit * 24}px 0 ${theme.spacing.unit * 4}px 0`,
  },
  heart: {
    verticalAlign: "middle"
  },
  blake: {
    width: 72,
    height: 72
  },
  motto: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 8,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  text: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  }
})

export default withStyles(styles)(({classes}) => (
  <div className={classes.root}>
    <Typography align="center"><Blake className={classes.blake} light/></Typography>
    <Typography className={classes.motto} variant={"subtitle1"} align="center">Aut viam inveniam aut faciam</Typography>
    <Typography className={classes.text} variant="h5" align="center">
      Coded with <Heart className={classes.heart}/> by me &copy; 2019
    </Typography>
  </div>
))