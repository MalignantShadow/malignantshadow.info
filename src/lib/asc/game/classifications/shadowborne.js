import React from 'react'

import Typography from '@material-ui/core/Typography'

import icon from '../../../../components/asc/icons/Shadowborne'
import { default as d} from '../dice'
import { repeatVal as r, auraPointsFeature, alterAppearanceSubFeature, heroStudiesFeature } from './util'
import {
  DiceTerm
} from '../../../../components/asc/'

// repeat from shadows dice a number of times
const rd = (diceAmount, repeatAmount = 3) => r(() => <DiceTerm dice={d(diceAmount, 6)}/>, repeatAmount)

const featureMap = {
  auraPoints: auraPointsFeature([
    alterAppearanceSubFeature()
  ]),
  fromShadows: {
    title: "From Shadows",
    levels: [1],
    desc: () => (
      <React.Fragment>
        <Typography paragraph>
          At level 1, you know how to strike swift and subtly in low light. Once per turn, you can deal an extra <DiceTerm dice={d(1, 6)}/> dark damage
          to a unit you hit with an attack if you are within a space of darkness or have advantage on the attack roll.
        </Typography>
      </React.Fragment>
    )
  },
  heroStudies: heroStudiesFeature()
}

export default {
  name: "Shadowborne",
  desc: ({noParagraph}) => (
    <React.Fragment>
      <Typography paragraph>
        Shadowborne are naturally introverted and will often avoid large social gatherings and events. Most Shadowborne do not have large groups
        of friends, they opt for smaller groups of very close friends instead. They are known to prefer the dark of the night, leading some to use
        their Affinity for late-night criminal activity.
      </Typography>
      <Typography paragraph={!noParagraph}>
        The cultural colors for Shadowborne are black, dark grey, and dark shades of purple. Many children are named after the colors and wear them
        proudly. While almost all Shadowborne are born with black hair, it is common to see parts of their hair dyed a different color.
        This trend also applies to other areas of dress, the most common areas being shoelaces and shirt accents.
      </Typography>
    </React.Fragment>
  ),
  archetypes: ["Assassin", "Marksman"],
  affinity: "Darkness",
  auraMod: "Intelligence",
  aspect: "Dusk",
  icon,
  traits: {
    ac: [8, "Dexterity", "Intelligence"],
    scoreIncreases: [
      ["Dexterity", 3],
      ["Intelligence", 1],
      ["Charisma", -1]
    ],
    auraMod: "Intelligence",
    resistance: [undefined, "dark"],
    vulnerability: ["The Light! It Burns!", "light"],
    speed: 35
  },
  intrinsics: {
    hitDice: d(1, 8),
    prof: {
      weapons: ["Automatic rifles", "precision weapons", "simple melee weapons", "sidearms"],
      savingThrows: ["Dexterity", "Intelligence"],
      skills: ["acrobatics", "insight", "investigation", "perception", "sleightOfHand", "stealth"]
    },
    equipment: [
      "(a) a sniper rifle with 4 clips or (b) marksman rifle with 5 clips",
      "(a) two daggers or (b) a compound bow with 15 arrows",
      "A sidearm with 3 clips"
    ]
  },
  featureTableExtras: [{
    title: "From Shadows",
    values: [rd(1, 2), rd(2), rd(3), rd(4), rd(5), rd(6), rd(7)].reduce((acc, val) => acc.concat(val))
  }, {
    title: "Darkvision Distance",
    values: [r(60, 3), r(70, 3), r(80, 3), r(90, 3), r(100, 3), r(110, 3), r(120, 2)].reduce((acc, val) => acc.concat(val))
  }],
  f: featureMap,
  features: [
    featureMap.fromShadows,
    featureMap.auraPoints, featureMap.heroStudies
  ]
}

/*
heroes[3+]:
  name, epithet, icon, image?
  qoute: (quotes have their own component)
    text, author
  desc
  features[] (see above)
  abilities (term name)


*/
