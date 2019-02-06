import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import ArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Tooltip from '@material-ui/core/Tooltip'
import MuiLink from  '@material-ui/core/Link'
import SwipeableViews from 'react-swipeable-views'

import { RepoButton } from '../../components/common/links'

const tagDescriptions = {
  bukkit: "This project is a Bukkit server plugin",
  defunct: "No longer maintained; may fail to function properly",
  java: "Written in Java",
  kotlin: "Written in Kotlin",
  "react.js": "Website; uses React.js",
  wip: "Work in Progress",
  unity: "Made with Unity",
  "umbrella:asc": "Part of the Ascension umbrella project"
}

const projectStyles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  imgWrapper: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1
  },
  img: {
    maxWidth: "100%",
    height: "auto"
  },
  icon: {

  },
  rightContent: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.unit * 2
  },
  heading: {
    marginBottom: theme.spacing.unit * 2
  },
  text: {

  },
  tag: {
    "&:not(:last-child)": {
      marginRight: theme.spacing.unit
    }
  },
  tagWrapper: {
    display: "flex",
    marginTop: theme.spacing.unit* 2,
    justifyContent: "center"
  },
  buttonWrapper: {

  },
  repoButton: {
    marginTop: theme.spacing.unit * 2
  },
  grow: { flexGrow: 1 }
})

const Project = withStyles(projectStyles)(({classes, children, name, imgSrc, repoType, repo, tags, projectPageButtonHref, projectPageButtonText}) => (
  <div className={classes.root}>
    <div className={classes.imgWrapper}>
      <img className={classes.img} src={imgSrc}/>
    </div>
    <div className={classes.rightContent}>
      <Typography className={classes.heading} variant="h6" align="center">{name}</Typography>
      <Typography>{children}</Typography>
      <div className={classes.tagWrapper}>
        {tags.map((e, i) => {
          const tagDescription = typeof e === "string" ? tagDescriptions[e] : e.desc
          const chip =
            <Chip
              key={tagDescription ? undefined : i}
              label={typeof e === "string" ? e : e.name}
              variant="outlined"
              color="secondary"
              className={classes.tag}
            />
          return tagDescription
            ? <Tooltip placement="top" key={i} title={tagDescription}>{chip}</Tooltip>
            : chip
        })}
      </div>
      <div className={classes.grow}/>
      {repo &&
        <RepoButton className={classes.repoButton} variant="contained" color="primary" type={repoType} repo={repo}/>
      }
      {projectPageButtonHref &&
        <Button variant="contained" color="primary" component="a" href={projectPageButtonHref} target="_blank" rel="noopener noreferrer">
          {projectPageButtonText || "View project page"}
        </Button>
      }
    </div>
  </div>
))


const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  heading: {
    margin: `${theme.spacing.unit * 16}px 0 ${theme.spacing.unit * 8}px 0`
  },
  paper: {
    width: theme.breakpoints.values.lg,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${theme.spacing.unit * 6}px)`
    },
  },
  swipeableView: {
    "& > div": {
      height: 500
    }
  },
  projectSlide: {
    display: "flex"
  }
})

const projectListing = [
  <Project
    key="asc-rpg"
    name="Ascension: Tabletop"
    tags={["game", "wip", "rpg", "umbrella:asc", { name: "reference:material-ui", desc: "The reference site uses React + Material-UI" }]}
    projectPageButtonHref="https://asc.malignantshadow.info"
    projectPageButtonText="View reference site"
  >
    Ascension: Tabletop takes the world of Ecumene and transforms it into a playable role-playing game. Players familiar
    with D&D 5th-Edition rules should find the game easy to pick up and fun to play. The game utilizes an unconventional
    class system that will intrigue and challenge players, rewarding creative decisions.
    <br/><br/>
    The game and the world are still a work in progress. As far as game balancing is concerned, the game is considered
    in an alpha state.
    <br/><br/>
    Concepts and paradigms within the game, as well as Project Ascension in general, are inspired by
    RWBY, Halo, and Avatar: The Last Airbender (among others).
  </Project>,
  <Project
    key={"itemmail"}
    name="ItemMail"
    repoType="github"
    repo="MalignantShadow/ItemMail"
    tags={["bukkit", "java", "defunct"]}
  >
    ItemMail was my first Bukkit plugin, and steadily grew to be a powerful and simplistic trading plugin for players.
    The plugin was able to completely serialize a player's items (via another project I wrote) and store it in a MySQL
    database. I haven't updated the plugin in 5+ years, long enough that its current code does not reflect my current
    coding style and design practices very well.
    <br/><br/>
    Funnily enough, it utilized the same send-and-request design that peer payment apps (i.e. Venmo/Paypal)
    use today, before such apps existed.
  </Project>,
  <Project
    key={"mineopoly"}
    name="Mineopoly"
    repoType="github"
    repo="MalignantShadow/Mineopoly"
    tags={["bukkit", "java", "defunct", "game"]}
  >
    Mineopoly was my first attempt at making a game, piggybacking off of Bukkit's API to create a Monopoly clone.
    It went through a couple of  revisions, and featured an inventory-based menu system -- players could use these menus
    instead of typing commands. It also featured an ability to save and resume games.
    <br/><br/>
    Players in Mineopoly were the player tokens themselves -- when a player rolled the dice, they were automatically
    teleported to the appropriate space on the board.
    <br/><br/>
    Due to possible underlying API changes, the plugin most likely does not work (The plugin was last updated in 2014).
  </Project>,
  <Project
    key="akensha"
    name="Circuit Script"
    repoType="github"
    repo="MalignantShadow/akensha-svg"
    tags={["java", "generation", "writing-system", "conlangs", "umbrella:asc"]}
  >
    Circuit Script is a vertical writing system I made for a constructed language I have not fully developed yet.
    The writing system was inspired by computer circuitry (hence its name), and words are designed to look like such.
    There are also rules defined for stylizing words, like the one shown on this card (which was generated using this tool).
    <br/><br/>
    I have further plans for this tool! I eventually want to create a web-based, interactive version of this tool that
    allows the user to drag the arms of letters. The tool would also allow easy saving to the user's device in svg format.
  </Project>
]

class Projects extends React.Component {

  state = {
    currentStep: 0
  }

  setNextIndex = (mod) => {
    let index = this.state.currentStep + mod
    const max = projectListing.length
    if(index < 0) index += max
    else if(index >= max) index = max - index
    this.setState({currentStep: index})
  }

  handleBack = () => {
    this.setNextIndex(-1)
  }

  handleNext = () => {
    this.setNextIndex(1)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography className={classes.heading} variant="h4" align="center">My Projects</Typography>
        <Paper className={classes.paper} elevation={1}>
          <SwipeableViews
            disabled
            index={this.state.currentStep}
            className={classes.swipeableView}
            slideClassName={classes.projectSlide}>
            {projectListing}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            position="static"
            steps={projectListing.length}
            activeStep={this.state.currentStep}
            backButton={
              <Button size="small" onClick={this.handleBack}>
                <ArrowLeft/>
                Back
              </Button>
            }
            nextButton={
              <Button size="small" onClick={this.handleNext}>
                Next
                <ArrowRight/>
              </Button>
            }
          />
        </Paper>
      </div>
    )
  }

}

export default withStyles(styles)(Projects)