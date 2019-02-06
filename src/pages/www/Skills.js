import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import CodeIcon from '@material-ui/icons/Code'
import GamepadIcon from '@material-ui/icons/Gamepad'
import InfinityIcon from '@material-ui/icons/AllInclusive'

const styles = theme => ({
  root: {

  },
  bg: {
    width: "100%",
    backgroundColor: theme.palette.primary.main
  },
  introWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing.unit * 36,
    paddingTop: theme.spacing.unit * 16,
  },
  introText: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    width: theme.breakpoints.values.md,
    "&:first-child": { marginBottom: theme.spacing.unit * 2},
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      padding: `0 ${theme.spacing.unit * 4}px`
    }
  },
  skillsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillsPaper: {
    margin: theme.spacing.unit * -20,
    width: theme.breakpoints.values.lg,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${theme.spacing.unit * 6}px)`
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    }
  }
})

const columnStyles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    "&:not(:last-child)": {
      borderRight: `1px solid #EEE`
    },
    [theme.breakpoints.down("sm")]: {
      "&:not(:last-child)": {
        borderRight: "none"
      },
      flexBasis: "initial",
      borderBottom: `1px solid #EEE`
    }
  },
  icon: {
    color: theme.palette.primary.main,
    width: 64,
    height: 64,
    marginBottom: theme.spacing.unit * 4
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing.unit * 2
  },
  subtitle: {
  }
})

const Column = withStyles(columnStyles)(({classes, children, title, subtitle, icon: Icon}) => (
  <div className={classes.root}>
    <Icon className={classes.icon}/>
    <Typography className={classes.title} variant="h5" align="center">{title}</Typography>
    <Typography className={classes.subtitle} align="center">{subtitle}</Typography>
    {children}
  </div>
))

const columnTextStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4
  },
  childWrapper: {

  }
})

const ColumnText = withStyles(columnTextStyles)(({classes, title, children}) => (
  <div className={classes.root}>
    <Typography variant="subtitle1" color="primary" align="center">{title}</Typography>
    <div className={classes.childWrapper}>
      {children.map((e, i) => (
        <Typography key={i} align="center">{e}</Typography>
      ))}
    </div>
  </div>
))

export default withStyles(styles)(({classes}) => (
  <React.Fragment>
    <div className={classes.root}>
      <div className={classes.bg}>
        <div className={classes.introWrapper}>
          <Typography className={classes.introText} variant="h4" align="center">
            Greetings, User
          </Typography>
          <Typography className={classes.introText} variant="subtitle1" align="center">
            I started teaching myself Java just before starting high school in 2010 for a small project that
            I never ended up finishing. Since then, my skillset has only grown larger from passion and a lot of practice.
            I'm a quick learner, curious at heart, and innovative.
          </Typography>
        </div>
      </div>
      <div className={classes.skillsWrapper}>
        <Paper className={classes.skillsPaper} elevation={1}>
          <Column
            icon={GamepadIcon}
            title="Game Designer"
            subtitle="My main passion is games. Like any game design hobbyist, I have a dream game that I will eventually create."
          >
            <ColumnText title="Favorite Games">
              {[
                "Halo, Portal, Pokemon, League of Legends, Slay the Spire, Puzzle Quest, and many more"
              ]}
            </ColumnText>
            <ColumnText title="Currently Learning">
              {[
                "Unity/C#"
              ]}
            </ColumnText>
            <ColumnText title="My Games">
              {[
                "Mineopoly",
                "Ascension: Tabletop (RPG System, WIP)",
                "Ascension: Preamble (WIP)"
              ]}
            </ColumnText>
          </Column>
          <Column
            icon={CodeIcon}
            title="Developer"
            subtitle="My secondary passion is programming. I have the most fun when I'm programming a game or a tool for a game, but I have worked on other types of projects."
          >
            <ColumnText title="Languages I'm Fluent">
              {[
                <React.Fragment key={0}><b>Misc: </b>Java, Kotlin</React.Fragment>,
                <React.Fragment key={1}><b>Web: </b>HTML5, CSS3, Javascript, CoffeeScript, SASS</React.Fragment>
              ]}
            </ColumnText>
            <ColumnText title="Frameworks">
              {[
                "SWT",
                "Bukkit",
                "React.js",
                "jQuery"
              ]}
            </ColumnText>
            <ColumnText title="Tools">
              {[
                "Atom",
                "IntelliJ IDEA",
                "Github",
                "Terminal"
              ]}
            </ColumnText>
          </Column>
          <Column
            icon={InfinityIcon}
            title="Flexible"
            subtitle="I'm always learning about anything and everything I can. I often tell people that my brain absorbs information like a dry sponge on a rainy day."
          >
            <ColumnText title="Other Random Skills">
              {[
                "Amateur Linguist, Amateur Creative Writer, Amateur Cartographer"
              ]}
            </ColumnText>
          </Column>
        </Paper>
      </div>
    </div>
  </React.Fragment>
))