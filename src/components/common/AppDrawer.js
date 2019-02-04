import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: { display: "flex" },
  paper: { width: 240 }
})

//children = routing
export default withStyles(styles)(({classes, children, mobileOpen, onOpen, onClose}) => {

  return (
    <React.Fragment>
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{keepMounted: true}}
          classes={{paper: classes.paper}}
        >

        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          open
          variant="permanent"
          classes={{paper: classes.paper}}
        >

        </Drawer>
      </Hidden>
    </React.Fragment>
  )

})