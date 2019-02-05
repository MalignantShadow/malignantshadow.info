import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import ArrowDown from "@material-ui/icons/KeyboardArrowDown"
import BookIcon from '@material-ui/icons/Book'

import Hero from '../../../components/common/Hero'
import LinkedIn from '../../../components/common/icons/LinkedIn'
import GitHub from '../../../components/common/icons/GitHub'

import PlexusCanvas from './PlexusCanvas'

const color = "#CCC"
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 72}px ${theme.spacing.unit}px ${theme.spacing.unit * 72}px`
  },
  bg: {
    zIndex: -10,
    position: "absolute",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(#111, #333)",
  },
  canvas: {
    zIndex: -5,
    position: "absolute",
    width: "100%",
    height: "100vh"
  },
  grow: { flexGrow: 1 },
  salutation: {
    color: color
  },
  introWrapper: {

  },
  intro: {
    color: color,
    fontSize: 16,
    "&:not(:first-child)": {
      marginTop: theme.spacing.unit * 4
    }
  },
  avatar: {
    width: 128,
    height: 128,
  },
  socialWrapper: {
    margin: `${theme.spacing.unit * 4}px 0`,
    "& a:not(:first-child)": {
      marginLeft: theme.spacing.unit * 2
    }
  },
  social: {
    color: color,
    "&:hover": {
      color: "white"
    }
  },
  divider: {
    width: "100%",
    borderBottom: `1px solid ${color}`,
  },
  seeMoreWrapper: {
    marginTop: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  seeMoreText: {
    fontSize: 18,
    color: color
  },
  seeMoreArrow: {
    width: 32,
    height: 32,
    color: color
  }
})

const SocialLink = ({href, tooltip, children, ...other}) => (
  <Tooltip title={tooltip} placement="top">
    <a href={href} rel="noopener noreferrer" target="_blank" {...other}>
      {children}
    </a>
  </Tooltip>
)

//TODO: add controls for plexus
export default withStyles(styles)(({classes}) => (
  <React.Fragment>
    <div className={classes.bg}/>
    <PlexusCanvas className={classes.canvas}/>
    <Hero className={classes.root}>
      <Typography className={classes.salutation} variant={"h1"}>Bonjour!</Typography>
      <Typography className={classes.intro} align="center">
        Hello, human! My name is Caleb Downs, I am a programmer/developer located in Irvine, California.
        I have many hobbies, but the majority of my time is spent programming or playing a video game (sometimes both).
      </Typography>
      <Typography className={classes.intro} align="center">
        I have a wide range of skills utilizing a variety a different languages and frameworks, and I pride
        myself on being a quick learner. (rewrite me)
      </Typography>
      <div className={classes.grow}/>
      <Avatar className={classes.avatar} src="/img/me.png"/>
      <div className={classes.socialWrapper}>
        <SocialLink href="https://www.github.com/MalignantShadow" tooltip="MalignantShadow">
          <GitHub className={classes.social}/>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/caleb-downs-6a94198a/" tooltip="LinkedIn">
          <LinkedIn className={classes.social}/>
        </SocialLink>
        <SocialLink href="https:///wwww.github.com/MalignantShadow/malignantshadow.info" tooltip="Website Source">
          <BookIcon className={classes.social}/>
        </SocialLink>
      </div>
      <div className={classes.divider}/>
      <div className={classes.seeMoreWrapper}>
        <Typography className={classes.seeMoreText}>See More</Typography>
        <ArrowDown className={classes.seeMoreArrow}/>
      </div>
    </Hero>
  </React.Fragment>
))