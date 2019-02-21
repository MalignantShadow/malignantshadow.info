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
    alterAppearanceSubFeature(), {
      title: "Curse",
      desc: ({noParagraph}) => (
        <Typography paragraph={!noParagraph}>
          Immediately after a weapon attack during your Attack action, you spend 1 Aura point to attempt to curse the target’s fate.
          The target must succeed on a Constitution saving throw or have disadvantage on the first saving throw
          (your choice of Dexterity or Strength) they make until the start of your next turn. You may only use this feature once per turn,
          and a unit can only be cursed once by any source. If you attempt to Curse a target that has already been Cursed and they
          fail their saving throw, the Curse is overwritten.
        </Typography>
      )
    }, {
      title: "Interlude",
      desc: ({noParagraph}) => (
        <Typography paragraph={!noParagraph}>
          You spend 1 Aura point to take the Dodge action as a bonus action.
        </Typography>
      )
    }
  ]),
  blink: {
    title: "Blink",
    levels: [4],
    desc: ({noParagraph}) => (
      <React.Fragment>
        <Typography paragraph>
          At Level 4, you learn how to quickly move through shadows to teleport short distances. While in dim light or darkness,
          you may spend 1 Aura point to teleport 30 feet to an unoccupied space that is also in dim light or darkness as a bonus action.
          You have advantage on the next attack you make before the end of your turn. Blink does not trigger attacks of opportunity.
          You reappear in the same posture you disappeared, rotated on any axis. You may use Blink while prone; you will be prone when you reappear.
          Only you and your equipment are teleported with you. You may spend up to 2 Aura Points to extend the range by 5 feet for each point expended.
        </Typography>
        <Typography paragraph={!noParagraph}>
          At Level 11, you can spend 2 additional Aura points to touch one unit of your size or smaller and take them with you. They appear in a
          space relative to you from when you first touched them. Upon reappearing, the unit feels cold, as if they just walked into a large freezer;
          this feeling subsides after a few seconds. A unit that does not expect the Blink (such as an unwilling one) must also make a Constitution
          check (DC 15). On a failure, the sudden jump from one location to another stuns them until the end of their next turn.
        </Typography>
      </React.Fragment>
    )
  },
  darkvision: {
    title: "Darkvision",
    levels: [1],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        As a Shadowborne, your affinity to darkness has given you the ability to see in dark farther than others. At Level 1,
        you have a Darkvision distance of 60 feet. This distance increases as you gain levels, as shown in the <i>Darkvision Distance</i> column
        in the Shadowborne table.
      </Typography>
    )
  },
  fromShadows: {
    title: "From Shadows",
    levels: [1],
    desc: ({disableTerms, noParagraph}) => (
      <React.Fragment>
        <Typography paragraph>
          At Level 1, you know how to strike swift and subtly in low light. Once per turn, you can deal an
          extra <DiceTerm disableHover={disableTerms} dice={d(1, 6)}/> dark damage to a unit you hit with an attack if you are within a space of
          darkness or have advantage on the attack roll.
        </Typography>
        <Typography paragraph>
          You don’t need advantage on the attack roll if another enemy of the unit is within 5 feet of it, the unit isn’t incapacitated,
          and you don’t have disadvantage on the attack roll.
        </Typography>
        <Typography paragraph={!noParagraph}>
          The extra damage increases as you gain levels, as shown in the <i>From Shadows</i> column on the Shadowborne table.
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
    featureMap.darkvision, featureMap.fromShadows,
    featureMap.auraPoints,
    featureMap.heroStudies,
    featureMap.blink
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
