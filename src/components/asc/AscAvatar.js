import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    width: 64,
    height: 64,
    position: "relative"
  },
  inside: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
  },
  text: {
    clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& span": {
      color: theme.asc.accentText,
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(20)
    }
  },
  imgBorder: {
    position: "absolute",
    top: 3,
    left: 3,
    bottom: 3,
    right: 3,
    transform: "scale(.75) rotate(45deg)",
    ...theme.asc.mixin.metalBorder("bottom right"),
    borderWidth: 3
  }
}))(({ classes, children, className, src }) => {
  const style = { "background": `url(${src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }
  const child = src
    ? <div className={classes.inside} style={style} />
    : <div className={classNames(classes.inside, classes.text)}><Typography component="span">{children}</Typography></div>
  return (
    <div className={classNames(classes.root, className)}>
      {child}
      <div className={classes.imgBorder} />
    </div>
  )
})
