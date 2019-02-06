import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Heart from '@material-ui/icons/Favorite'

import Blake from '../../components/common/icons/Blake'
import ReactIcon from '../../components/common/icons/React'
import MuiLogo from '../../components/common/icons/MuiLogo'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing.unit * -16,
    padding: `${theme.spacing.unit * 24}px 0 ${theme.spacing.unit * 2}px 0`,
  },
  heart: {
    color: "rgba(255, 255, 255, .7)",
    margin: `0 ${theme.spacing.unit / 2}px`
  },
  blake: {
    width: 72,
    height: 72,
    color: "rgba(255, 255, 255, .7)"
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&:not(:first-of-type)": {
      marginTop: theme.spacing.unit,
    }
  },
  madeWithText: {
    color: "rgba(255, 255, 255, .7)",
    fontSize: ".7rem"
  },
  madeWithIcon: {
    marginLeft: theme.spacing.unit,
    color: "rgba(255, 255, 255, .7)"
  },
  motto: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 8,
    color: "rgba(255, 255, 255, .7)",
    fontSize: "2rem"
  },
  text: {
    color: "rgba(255, 255, 255, .7)"
  }
})

export default withStyles(styles)(({classes}) => (
  <div className={classes.root}>
    <Typography align="center"><Blake className={classes.blake}/></Typography>
    <Typography className={classes.motto} align="center">
      <Tooltip placement="top" title="(Latin) I will find a way or make one">
        <i>Aut viam inveniam aut faciam</i>
      </Tooltip>
    </Typography>
    <div className={classes.textWrapper}>
      <Typography className={classes.text}>
        Coded with
      </Typography>
      <Heart className={classes.heart}/>
      <Typography className={classes.text}>
        by me &copy; 2019
      </Typography>
    </div>
    <div className={classes.textWrapper}>
      <Typography className={classes.madeWithText}>Made with</Typography>
      <ReactIcon className={classes.madeWithIcon}/><MuiLogo className={classes.madeWithIcon}/>
    </div>
  </div>
))