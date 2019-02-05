import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'

import ChevronUp from '@material-ui/icons/KeyboardArrowUp'
import ChevronDown from '@material-ui/icons/KeyboardArrowDown'

const styles = theme => ({
  root: {},
  paper: { width: 240 }
})

const dhStyles = theme => ({
  root: {
    ...theme.mixins.toolbar,
    display: "flex",
    flexDirection: "row"
  },
  titles: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: theme.spacing.unit * 3
  },
  subtitle: { fontSize: "0.75rem" }
})

const diStyles = theme => ({
  parent: {
    fontWeight: theme.typography.fontWeightMedium
  },
  item: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  itemText: {
    fontSize: ".875rem"
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  child: {
    paddingLeft: theme.spacing.unit * 3
  },
  chevron: {
    marginRight: 0
  }
})

const DrawerItem = withRouter(withStyles(diStyles)(({ classes, child, path, title, location }) => (
  <ListItem button component={Link} to={path} className={classNames(classes.item, {[classes.child]: child})}>
    <ListItemText
      primaryTypographyProps={{
        className: classNames(classes.itemText, {
          [classes.active]: location.pathname === path
        })
      }}
      primary={title}/>
  </ListItem>
)))

class DrawerItemCollapse extends React.Component {

  state = {
    open: false
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const { classes, path, children, listTitle, title } = this.props
    const { open } = this.state

    return (
      <React.Fragment>
        <ListItem button onClick={this.toggleOpen}>
          <ListItemText
            primaryTypographyProps={{
              className: classNames(classes.parent, classes.itemText)
            }}
            primary={listTitle || title}/>
          <ListItemIcon className={classes.chevron}>{open ? <ChevronUp/> : <ChevronDown/>}</ListItemIcon>
        </ListItem>
        <Collapse in={open}>
          {children.map((e, i) => {
            if (typeof e !== "object" || e.hidden) return null

            return (
              <DrawerItem
                child
                path={e.path.startsWith("/") ? e.path : `${path}/${e.path}`}
                title={e.listTitle || e.title}
                key={i}
              />
            )
          })}
        </Collapse>
      </React.Fragment>
    )
  }

}

DrawerItemCollapse = withStyles(diStyles)(DrawerItemCollapse)

const DrawerHead = withStyles(dhStyles)(({ classes, title, subtitle }) => (
  <div className={classes.root}>
    <div className={classes.titles}>
      <Typography variant="h6">{title}</Typography>
      <Typography color="textSecondary" className={classes.subtitle}>{subtitle}</Typography>
    </div>
  </div>
))

const DrawerItems = withStyles(styles)(({ routing, classes, title, subtitle }) => {
  const drawer = []
  routing.forEach((e, i) => {
    if (e === "divider") {
      drawer.push(<Divider key={i}/>)
      return
    }
    if (e.hidden) return

    drawer.push(e.children ?
      <DrawerItemCollapse {...e} key={i}/> :
      <DrawerItem path={e.path} title={e.listTitle || e.title} key={i}/>
    )
  })
  return (
    <div className={classes.root}>
      <DrawerHead title={title} subtitle={subtitle}/>
      <Divider/>
      <List>
        {drawer}
      </List>
    </div>
  )
})

//children = routing
export default withStyles(styles)(({ classes, children, mobileOpen, onClose, title, subtitle }) => {

  const items = <DrawerItems routing={children} title={title} subtitle={subtitle}/>

  return (
    <React.Fragment>
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          classes={{ paper: classes.paper }}
        >
          {items}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          open
          variant="permanent"
          classes={{ paper: classes.paper }}
        >
          {items}
        </Drawer>
      </Hidden>
    </React.Fragment>
  )

})