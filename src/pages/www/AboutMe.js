import React from 'react'

import Avatar from '@material-ui/core/Avatar'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  avatarWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    width: 128,
    height: 128
  }
})

export default withStyles(styles)(({classes}) => (
  <React.Fragment>
    <div className={classes.avatarWrapper}>
      <Avatar className={classes.avatar} src="/img/me.png"/>
    </div>
  </React.Fragment>
))