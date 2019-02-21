import React from 'react'

import Typography from '@material-ui/core/Typography'

import icon from '../../../../components/asc/icons/Shadowborne'
import { default as d} from '../dice'
import {
  repeatVal as r,
  auraPointsFeature,
  alterAppearanceSubFeature,
  heroStudiesFeature,
  extraAttackFeature,
  scoreImprovementFeature
} from './util'
import {
  Calc,
  DiceTerm,
  RpgTypography
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
  banishSummon: {
    title: "Banish/Summon",
    levels: [9],
    desc: ({noParagraph}) => (
      <React.Fragment>
        <Typography paragraph>Once you reach Level 9, you learn how to turn objects into Shade and re-form them later.</Typography>
        <RpgTypography title="Banish"paragraph>
          You can use your Action to spend 3 Aura points to touch an inanimate object no larger than 5 feet in any dimension and weighing
          no more than twice the weight you can normally carry. The object vanishes and leaves behind a puff of black smoke that dissipates
          after a couple seconds. If the object was on a person (such as in a bag or in their hands), they are aware that the object is missing
          if the object weighed more than 5 pounds, they can see the smoke left behind, or they were watching the object as it disappeared. You
          can add the item to your inventory; it has a weight of 0.
        </RpgTypography>
        <RpgTypography paragraph>
          You do not gain the Aura point back until you Summon the object. You cannot have more than 2 items Banished. If the item is
          affected by an ability (such as Light or Gloom), then the effect(s) end.
        </RpgTypography>
        <RpgTypography title="Summon" paragraph={!noParagraph}>
          You can use your action to make the object reappear in a similar position in which you made it vanish (you are touching the object
          when it appears). You regain the Aura points you expended to Banish it.
        </RpgTypography>
      </React.Fragment>
    )
  },
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
  chaoticLuck: {
    title: "Chaotic Luck",
    levels: [7],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        When you reach Level 7, your affinity with Darkness allows you to affect the luck of others. When a unit you can see makes an attack roll,
        aptitude check, or saving throw, you can spend 2 Aura points to roll <DiceTerm dice={d(1, 4)}/> and apply it to the roll as a bonus or
        penalty (of your choice). You can do so after the roll is made but before the outcome is determined.
      </Typography>
    )
  },
  curseImprovement: {
    title: "Curse Improvement",
    levels: [10],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        When you reach Level 10, you add Charisma to the list of aptitudes you can affect with Curse.
        (Curse can now affect Charisma, Dexterity, or Strength)
      </Typography>
    )
  },
  darkConsumption: {
    title: "Dark Consumption",
    levels: [20],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        At Level 20, when you roll for initiative and you are in a space of dim light or darkness with less than half your hit points left, you
        regain hit points equal to <Calc><DiceTerm dice={d(5, 8)}/> + your Intelligence modifier</Calc>.
      </Typography>
    )
  },
  darkSelf: {
    title: "Dark Self",
    levels: [18],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        Beginning at Level 18, when you roll for initiative and have no Aura points remaining, you regain Aura points equal
        to <Calc><DiceTerm dice={d(1, 4)}/> + your Intelligence modifier</Calc>.
      </Typography>
    )
  },
  darksense: {
    title: "Darksense",
    levels: [13],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        Upon reaching Level 13, your experience in the dark gives you the ability to sense the unseen. If you are able to hear,
        you can sense the presence of Invisible or hidden units within 10 feet of you.
      </Typography>
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
  extraAttack: extraAttackFeature(),
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
  heroStudies: heroStudiesFeature(),
  malignantShadows: {
    title: "Malignant Shadows",
    levels: [14],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        When you reach Level 14, you are more skilled in dealing damage with From Shadows. You can spend 2 Aura points to reroll any die.
        You must use the new roll, and you can only reroll a die once. You can roll a maximum of 3 dice in the duration of your turn.
      </Typography>
    )
  },
  perfectCurse: {
    title: "Perfect Curse",
    levels: [15],
    desc: ({noParagraph}) => (
      <Typography paragraph={!noParagraph}>
        When you reach Level 15, you add Wisdom to the list of aptitudes you can affect with Curse.
        (Curse can now affect Charisma, Dexterity, Strength, or Wisdom)
      </Typography>
    )
  },
  scoreImprovement: scoreImprovementFeature()
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
    featureMap.scoreImprovement, featureMap.blink,
    featureMap.extraAttack,
    featureMap.chaoticLuck,
    featureMap.banishSummon,
    featureMap.curseImprovement,
    featureMap.darksense,
    featureMap.malignantShadows,
    featureMap.perfectCurse,
    featureMap.darkSelf,
    featureMap.darkConsumption
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
