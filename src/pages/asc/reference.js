import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { AscPage, IndexCard, IndexCardContent } from '../../components/asc'
import { skillsByAptitude } from "../../lib/asc/game"
import * as classifications from '../../lib/asc/game/classifications'

const changeHeaderColors = (theme, color) => ({
  backgroundColor: theme.asc[color].main,
  color: theme.palette.getContrastText(theme.asc[color].main)
})

const sortedClasses = Object.values(classifications).sort((a, b) => a.name - b.name)

export default withStyles(theme => ({
  card: {
    marginTop: theme.spacing.unit * 2
  },
  classWrapper: {
    ...changeHeaderColors(theme, "classifications")
  },
  classContent: {
    display: "flex",
    flexWrap: "wrap"
  },
  classImgWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  classImg: {
    height: 64,
    borderRadius: 64,
    marginBottom: theme.spacing.unit
  },
  potentialWrapper: {
    ...changeHeaderColors(theme, "abilities")
  },
  potentialSub: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  potentialSubHeader: {
    paddingBottom: theme.spacing.unit / 2,
    borderBottom: `3px solid ${theme.asc.abilities.main}`
  },
  abilityClassWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: theme.spacing.unit,
    "& > *": {
      marginTop: theme.spacing.unit * 2,
      "&:not(:first-child)": {
        marginLeft: theme.spacing.unit * 2
      }
    }
  },
  skillsWrapper: {
    marginTop: theme.spacing.unit,
    display: "flex"
  },
  skill: {
    textTransform: "uppercase",
    flexBasis: 0,
    flexGrow: 1
  }
}))(({ classes }) => (
  <AscPage>
    <IndexCard title="Classifications" classes={{ title: classes.classWrapper }}>
      <IndexCardContent>
        <Grid container spacing={8}>
          {sortedClasses.map((e, i) => (
            <Grid key={i} className={classes.classImgWrapper} item md={2} sm={4} xs={6}>
              <img alt="" src="//placehold.it/64x64" className={classes.classImg} />
              <Typography>{e.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </IndexCardContent>
    </IndexCard>
    <IndexCard className={classes.card} title="Potential" classes={{ title: classes.potentialWrapper }}>
      <IndexCardContent>
        <div className={classes.potentialSub}>
          <Typography className={classes.potentialSubHeader} variant="h4">Abilities</Typography>
          <div className={classes.abilityClassWrapper}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
            <Avatar>E</Avatar>
            <Avatar>F</Avatar>
            <Avatar>G</Avatar>
          </div>
        </div>
        <div className={classes.potentialSub}>
          <Typography className={classes.potentialSubHeader} variant="h4">Skills</Typography>
          <div className={classes.skillsWrapper}>
            {Object.entries(skillsByAptitude)
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([aptitude], i) => (
                <Button key={i} className={classes.skill} component={Link} to={`/ref/skills#${aptitude.toLowerCase().substring(0, 3)}`}>
                  {aptitude}
                </Button>
              )
              )}
          </div>
        </div>
      </IndexCardContent>
    </IndexCard>
  </AscPage>
))
