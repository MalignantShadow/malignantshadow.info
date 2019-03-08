import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
  root: {
    width: 64,
    height: 64,
    position: "relative"
  },
  img: {
    width: "100%",
    height: "100%",
    clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"
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
}))(({ classes, className, src }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.img} style={{ "background": `url(${src})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
    <div className={classes.imgBorder} />
  </div>
))
