import React from 'react'

import Typography from '@material-ui/core/Typography'

import icon from '../../../../components/asc/icons/Salamander'
import { default as d } from '../dice'
import {
  repeatVal as r,
  auraPointsFeature,
  alterAppearanceSubFeature,
  heroStudiesFeature,
  extraAttackFeature,
  scoreImprovementFeature,
  makeFeature as f,
  makeSimpleFeature as sf,
  sortHeroes
} from './util'
import {
  Calc,
  ClassificationTerm,
  ConditionTerm,
  DiceTerm,
  FeatureTerm,
  RpgTypography,
} from '../../../../components/asc/'

const featureMap = {

}

export default {
  name: "Salamander",
  desc: ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>

      </Typography>
      <Typography paragraph={!noParagraph}>

      </Typography>
    </React.Fragment>
  ),
  icon,
  archetypes: ["Fighter", "?"],
  affinity: "Fire",
  auraMod: "Charisma",
  aspect: "Mars",
  traits: {
    scoreIncreases: [
      ["Charisma", 2],
      ["Strength", 1],
    ],
    resistance: [undefined, "fire"],
    vulnerability: ["The Bad Kind of Wet", "water"],
    speed: 35
  },
  intrinsics: {
    hitDice: d(1, 10),
    prof: {
      weapons: ["Shotguns", "grenade", "martial melee weapons", "sidearms"],
      savingThrows: ["Charisma", "Dexterity"],
      skills: ["acrobatics", "athletics", "deception", "insight", "intimidation", "performance", "persuasion", "survival"]
    },
    equipment: [
      "(a)An automatic rifle or (b) a shotgun",
      "",
      "A sidearm with 3 clips"
    ]
  },
  featureTableExtras: [{
    title: "Rages",
    values: [r(2, 2), r(3, 3), r(4, 6), r(5, 5), r(6, 3), "Unlimited"].reduce((acc, val) => acc.concat(val))
  }, {
    title: "Volatile/Charming Bonus",
    values: [r("+2", 6), r("+3", 6), r("+4", 5), r("+5", 3)].reduce((acc, val) => acc.concat(val))
  }],
  f: featureMap,
  features: [],
  heroes: []
}
