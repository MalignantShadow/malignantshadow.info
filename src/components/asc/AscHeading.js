import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LinkIcon from '@material-ui/icons/Link'

import { slug } from "../../lib/routing"

import Anchor from '../common/Anchor'
import AscLink from './AscLink'

const mapping = {
  title: "h3",
  subtitle: "h6",
  h1: "h4",
  h2: "h5",
  h3: "h6"
}

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: theme.spacing.unit
  },
  accentText: {
    color: theme.asc.accent
  },
  title: {
    alignItems: "baseline"
  },
  h1: {
    borderBottom: `3px solid ${theme.palette.divider}`
  },
  h2: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  subtitle: {
    color: theme.asc.accent,
    marginLeft: theme.spacing.unit
  },
  hash: {
    color: theme.asc.accent2,
    marginLeft: theme.spacing.unit,
    verticalAlign: "baseline",
    display: "flex",

    "&:hover": {
      color: theme.asc.accentText
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

  handleEnter = () => this.setState({ showHash: true })
  handleLeave = () => this.setState({ showHash: false })

  render() {
    const { classes, className, id, children, variant, subtitle, caption, ...other } = this.props
    const { showHash } = this.state
    const resolvedId = id || slug(children)
    return (
      <React.Fragment>
        <Anchor id={resolvedId} />
        <div className={classNames(classes.root, {
          [classes.title]: variant === "title",
          [classes.h1]: variant === "h1",
          [classes.h2]: variant === "h2"
        }, className)} {...other} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          <Typography variant={mapping[variant]} className={classNames({ [classes.accentText]: variant !== "title" })}>{children}</Typography>
          {subtitle &&
            <Typography variant={mapping.subtitle} className={classes.subtitle}>{subtitle}</Typography>
          }
          {showHash && variant !== "title" &&
            <AscLink href={`#${resolvedId}`}><LinkIcon className={classes.hash} /></AscLink>
          }
        </div>
        {caption &&
          <Typography className={classes.caption} gutterBottom>{caption}</Typography>
        }
      </React.Fragment>
    )
  }

}


export default withStyles(styles)(AscHeading)
