import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TermBase from './TermBase'
import * as classifications from '../../../lib/asc/game/classifications'
import { styleCategory } from './util'

export default withStyles(theme => ({
  ...styleCategory(theme.asc.classifications),
  statsWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: theme.spacing.unit,
    borderBottom: `3px solid ${theme.asc.classifications.main}`,
    marginBottom: theme.spacing.unit * 2
  },
  statsWrapperRow: {
      display: "flex",
      flexDirection: "row"
  },
  stat: {
    flexBasis: 0,
    flexGrow: 1
  },
  dice: {
    color: theme.asc.term.dice.main,
    fontWeight: 500
  }
}))(({classes, term}) => {
  const { name, termDesc, icon, affinity, colors, game } = classifications[term]
  return (
    <TermBase
      icon={icon}
      name={name}
      category="classification"
      classes={{
        category: classes.category
      }}
    >
      <div className={classes.statsWrapper}>
        <div className={classes.statsWrapperRow}>
          <Typography className={classes.stat}>
            Elemental Affinity: <span style={{color: colors.text || colors.main, fontWeight: 500}}>{affinity}</span>
          </Typography>
          <Typography className={classes.stat}>
            Hit Dice: <span className={classes.dice}>{game.hitDice.toString()}</span>
          </Typography>
        </div>
        <div className={classes.statsWrapperRow}>
          <Typography className={classes.stat}>

          </Typography>
          <Typography className={classes.stat}>

          </Typography>
        </div>
      </div>
      <div className={classes.desc}>
        <Typography>{termDesc}</Typography>
      </div>
    </TermBase>
  )
})
