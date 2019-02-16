import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import LinkIcon from '@material-ui/icons/Link'

import { slug } from "../../lib/routing"

const mapping = {
  title: "h3",
  h1: "h4",
  h2: "h5",
}

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: theme.spacing.unit
  },
  title: {
    alignItems: "baseline"
  },
  h1: {
    borderBottom: "3px solid"
  },
  h2: {
    borderBottom: "1px solid"
  },
  subtitle: {
    color: fade(theme.palette.getContrastText(theme.palette.background.default), .5),
    textTransform: "uppercase",
    fontWeight: 500,
    marginLeft: theme.spacing.unit
  },
  hash: {
    color: fade(theme.palette.getContrastText(theme.palette.background.default), .5),
    marginLeft: theme.spacing.unit,
    verticalAlign: "baseline",
    display: "flex",

    "&:hover": {
      color: fade(theme.palette.getContrastText(theme.palette.background.default), .75)
    }
  },
  caption: {
    fontStyle: "italic",
    marginLeft: theme.spacing.unit * 3
  }
})

class AscHeading extends React.Component {

  state = {
    showHash: false
  }

  handleEnter = () => this.setState({showHash: true})
  handleLeave = () => this.setState({showHash: false})

  render() {
    const { classes, className, id, children, variant, subtitle, caption, ...other } = this.props
    const { showHash } = this.state
    const resolvedId = id || slug(children)
    return (
      <React.Fragment>
        <div className={classNames(classes.root, {
          [classes.title]: variant === "title",
          [classes.h1]: variant === "h1",
          [classes.h2]: variant === "h2"
        }, className)} {...other} id={resolvedId} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          <Typography variant={mapping[variant]}>{children}</Typography>
          {variant === "title" && subtitle &&
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          }
          {showHash && variant !== "title" &&
            <Link href={`#${resolvedId}`}><LinkIcon className={classes.hash}/></Link>
          }
        </div>
        { caption &&
          <Typography className={classes.caption} paragraph>{caption}</Typography>
        }
      </React.Fragment>
    )
  }

}


export default withStyles(styles)(AscHeading)
