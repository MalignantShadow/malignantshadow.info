import React from 'react'

import Typography from '@material-ui/core/Typography'

import { GameTerm, Calc } from '../../../../../components/asc'
import { makeFeature as f, makeSimpleFeature as sf } from '../../classifications/util'

// TODO: reword text to say "attack that would deal piercing or slashing damage" instead of "bladed weapon"
const featureMap = {
  cull: f("Blademaster's Cull", [11], ({ noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      At Level 11, when you make a melee attack roll with a bladed weapon, you may spend a number of Aura points equal
      to <Calc>2 times (20 - the attack roll)</Calc> to make that attack roll a critical hit if the die landed on 18 or lower.
      [Minimum 4 Aura points spent]
    </Typography>
  )),
  master: f("Master of Blades", [6], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Beginning at Level 6, when you make a melee attack with a bladed weapon, you ignore
        {" "}<GameTerm term="resistance" disableHover={disableTerms} /> to piercing and slashing damage of the target. In addition, your melee
        attacks with bladed weapons score a critical hit on an attack roll of 19 or 20.
      </Typography>
      <Typography paragraph={!noParagraph}>
        In addition, when you roll a 1 or 2 on a melee attack roll, you can choose to reroll the die, using the new roll instead.
        You may reroll subsequent 1s and 2s, spending 3 Aura points each time you do so.
      </Typography>
    </React.Fragment>
  )),
  piercingLight: sf("Piercing Light", [11], `
    Starting at Level 3 when you choose to study this Hero, you can spend 1 Aura point when you deal 1 or more Light damage
    to deal extra Light damage equal to half your level.
  `),
}

export default {
  name: "Apollo Pearce",
  epithet: "The Blademaster",
  quote: {},
  desc: () => null,
  f: featureMap,
  features: [
    featureMap.piercingLight,
    featureMap.master,
    featureMap.cull
  ]
}
