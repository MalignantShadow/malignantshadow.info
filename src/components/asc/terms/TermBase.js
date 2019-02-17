import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import MuiLink from '@material-ui/core/Link'
import Fade from '@material-ui/core/Fade'

export default withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.getContrastText(theme.palette.background.default),
    width: 700,
    maxWidth: "unset",
    border: "1px solid",
    borderRadius: 0,
    padding: 0,
    boxShadow: "0 0 30px #333"
  },
  popper: {
    opacity: 1
  },
  term: {
    borderBottom: "1px dotted",
    fontWeight: 500,
    display: "initial",
    "&:not(a)": {
      cursor: "help"
    },
    "&:hover": {
      textDecoration: "none"
    },
    fontSize: "inherit"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    marginLeft: theme.spacing.unit,
    color: "#FFF",
    fontSize: theme.typography.h5.fontSize
  },
  name: {
    flexGrow: 1,
    color: "#FFF",
    padding: theme.spacing.unit
  },
  category: {
    fontSize: theme.typography.pxToRem(10),
    textTransform: "uppercase",
    border: "1px solid #FFF",
    color: "#FFF",
    backgroundColor: "#333",
    padding: `${theme.spacing.unit / 4}px ${theme.spacing.unit / 2}px`,
    margin: `0 ${theme.spacing.unit}px`
  },
  content: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  }
}))(({classes, children, icon: Icon, name, category, text = name, href}) => (
  <Tooltip
    TransitionComponent={Fade}
    placement="top-start"
    classes={{tooltip: classes.tooltip, popper: classes.popper}}
    title={
      <React.Fragment>
        <div className={classes.header}>
          { Icon && <Icon className={classes.icon}/>}
          <Typography variant="h5" className={classes.name}>{name}</Typography>
          {category &&
            <Typography component="span" className={classes.category}>{category}</Typography>
          }
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </React.Fragment>
    }
  >
    {href ?
      <MuiLink component={Link} to={href} className={classes.term}>{text}</MuiLink>
      : <Typography className={classes.term} component="span">{text}</Typography>
    }
  </Tooltip>
))
