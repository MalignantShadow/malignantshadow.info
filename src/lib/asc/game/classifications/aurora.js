import React from 'react'

import Typography from '@material-ui/core/Typography'

// import icon from '../../../../components/asc/icons/Shadowborne'
import { default as d } from '../dice'
import {
  repeatVal as r,
  auraPointsFeature,
  alterAppearanceSubFeature,
  heroStudiesFeature,
  extraAttackFeature,
  scoreImprovementFeature,
  makeFeature as f,
  makeSimpleFeature as sf
} from './util'
import {
  Calc,
  DiceTerm,
  FeatureTerm,
  SkillTerm,
  GameTerm
} from '../../../../components/asc/'

// import { } from '../heroes'

// repeat from inspiration dice a number of times
const rd = (faces, repeatAmount = 4) => r(() => <DiceTerm dice={d(1, faces)} />, repeatAmount)

const Feature = ({ id, ...other }) => <FeatureTerm classification="aurora" feature={id} {...other} />

const featureMap = {
  auraPoints: auraPointsFeature([
    alterAppearanceSubFeature(), {
      title: "Avert Blindness",
      key: "avertBlindness",
      desc: ({ disableTerms, noParagraph }) => (
        <Typography paragraph={!noParagraph}>
          When subjected to an effect that creates a large amount of light to blind you (such as someone activating floodlights, an ability,
          or a similar effect), you spend 1 Aura point to prevent yourself from being Blinded. This does not
          prevent other effects, such as damage, unless the effect is a direct cause of being Blinded.
        </Typography>
      )
    }, {
      title: "Counter",
      key: "counter",
      desc: ({ noParagraph }) => (
        <Typography paragraph={!noParagraph}>
          If you took the Dodge action on your last turn, and an attacker makes a melee attack against you that misses,
          you spend 1 Aura point to make a melee attack against them as a reaction.
        </Typography>
      )
    }
  ]),
  blindingStrike: sf("Blinding Strike", [9], `
      When you reach Level 10, you learn how to channel Light into the blade of your melee attacks. As part of a melee attack during
      your Attack action that would hit, you may spend 1 Aura point to attempt to blind the target. If the target can see you,
      they must make a Constitution saving throw against your Aura Save DC, or be blinded until the start of your next turn.
  `),
  dash: f("Dash", [4], ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Upon reaching Level 4, you learn how to use a burst of blinding speed to make attacks.
        You can use Dash as a bonus action, and it has the following modifications:
      </Typography>
      <Typography component="div" paragraph>
        <ul>
          <li>
            You may only move up to half your movement speed (difficult terrain is ignored). This movement is almost instantaneous
            and silent but is fairly easy to see, especially at night, as it leaves behind a trail of bright light for almost one second.
          </li>
          <li>You can only move in a straight line to an unoccupied space you can see. This line must not be blocked by obstacles.</li>
          <li>Dashing does not provoke attacks of opportunity.</li>
          <li>You may make a melee attack with advantage at the end of the Dash.</li>
        </ul>
      </Typography>
      <Typography paragraph={!noParagraph}>
        You can spend up to 2 Aura points to extend the range of Dash by 5 feet for each point spent.
      </Typography>
    </React.Fragment>
  )),
  dawnbringer: f("Dawnbringer", [1], ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Beginning at Level 1, you can create a small light source centered on one of your hands as a bonus action.Your hand emits bright,
        white light for 5 feet and dim light for another 5 feet.Your hands themselves do not glow, but tattoos of any color located from your
        wrist to your fingertips glow in the color of the tattoo(black tattoos glow white).
      </Typography>
      <Typography paragraph={!noParagraph}>
        The distance for both the bright light and dim light is extended by 5 feet when you reach Level 5 (10 feet), Level 9 (15 feet),
        Level 13 (20 feet), and Level 17 (25 feet).
      </Typography>
    </React.Fragment>
  )),
  doubleTeam: sf("Double Team", [7], `
      Upon reaching Level 7, if you are within melee range with a unit that an ally hits with attack, and that ally used their
      inspiration die in the attack roll, you may use your reaction to deal light damage to the unit equal to the number rolled on
      the inspiration die.
  `),
  extraAttack: extraAttackFeature,
  fearless: f("Fearless", [14], ({ disableTerms, noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Beginning at Level 14, you can no longer be surprised and you are immune to the Frightened condition.
    </Typography>
  )),
  heroStudies: heroStudiesFeature,
  inspiring: f("Inspiring", [1], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        At Level 1, you know how to use your talking skills to inspire those around you. Once per turn, you can use your bonus action
        to inspire a unit that can hear you within 20 feet. To do so, you spend 1 Aura Point or make
        a <SkillTerm term="performance" disableHover={disableTerms} /> check
        (<GameTerm term="dc" disableHover={disableTerms} /> <Calc>20 - half your proficiency bonus</Calc>). If you roll a natural 1 on
        the <SkillTerm term="performance" disableHover /> check, a random Inspired ally within 20 feet loses their Inspiration,
        and the unit you wanted to inspire does not gain Inspiration. If you roll a natural 20, an additional unit within 20 feet receives Inspiration as well.
    </Typography>
      <Typography paragraph>
        If you roll a natural 1 on the <SkillTerm term="performance" disableHover /> check, a random Inspired ally within 20 feet
        loses their Inspiration, and the unit you intended to inspire does not gain Inspiration. If you roll a natural 20, an additional unit within
        20 feet receives Inspiration in addition to the unit you intended to inspire.
    </Typography>
      <Typography paragraph>
        When a unit is Inspired, they can choose to roll additional dice when making an aptitude check or saving throw within the next
        10 minutes, after the initial roll but before the outcome is determined. If they do so, they add the result of the dice to the result
        of the check or saving throw, along with any other modifiers. The dice rolled is shown in the <i>Inspiration Die</i> column of the
        Aurora table for your level. A unit cannot be Inspired if they have been by you or another unit already (the action is wasted if you
        attempt to Inspire an already Inspired unit).
    </Typography>
      <Typography paragraph={!noParagraph}>
        You cannot attempt to inspire units more than the number shown in the <i>Inspirations</i> column of the Aurora table for your level.
        You regain any expended Inspirations after completing a long rest.
    </Typography>
    </React.Fragment>
  )),
  invisibility: f("Invisibilty", [9], ({ noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Upon reaching Level 13, you can use your action to make yourself and/or your equipment (as long as you are attuned to it)
      invisible. Invisibility requires concentration and ends when you make an attack or use an ability that is Tier 1 or above.
      You cannot use this feature for longer than a total of 10 minutes between long rests.
    </Typography>
  )),
  lightAbsorbtion: f("Light Absorbtion", [15], ({ disableTerms, noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Beginning at Level 15, when you use <Feature id="auraPoints" sub="avertBlindness" disableHover={disableTerms} />{" "}
      or <Feature id="blindingStrike" disableHover={disableTerms} /> successfully, you heal a number of hit points equal to
      your proficiency modifier. Any damage that you take immediately after <Feature id="auraPoints" sub="avertBlindness" disableHover /> is applied
      at the same time as the healing (if the healing is more than the damage, you heal the difference; if the damage is more than the healing,
      you take damage equal to the difference).
    </Typography>
  )),
  luminousSelf: f("Luminous Self", [18], ({ disableTerms, noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      At Level 18, when you roll for initiative and have no Aura points remaining, you regain Aura points equal
      <Calc>to <DiceTerm dice={d(1, 4)} /> + your Strength modifier</Calc>.
    </Typography>
  )),
  lunge: f("Lunge", [9], ({ noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Beginning at Level 9, you can spend 1 Aura point and 15 feet of movement to make a melee attack, as part of your Attack action,
      against a unit that is 10 feet away if the weapon you are using to make the attack does not have the reach property.
      You may only use this feature once per turn, and you must have 15 feet of movement available.
    </Typography>
  )),
  scoreImprovement: scoreImprovementFeature,
  slashStab: f("Slash/Stab", [1], ({ noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Beginning at Level 1, when you make an attack with a bladed weapon hat hits, you can decide whether the damage is of the
      type slashing or piercing.
    </Typography>
  ))
}

export default {
  name: "Aurora",
  desc: ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>

      </Typography>
      <Typography paragraph={!noParagraph}>

      </Typography>
    </React.Fragment>
  ),
  icon: () => null,
  archetypes: ["Fighter", "?"],
  affinity: "Light",
  auraMod: "Strength",
  aspect: "Dawn",
  // icon,
  traits: {
    scoreIncreases: [
      ["Strength", 2],
      ["Charisma", 1],
    ],
    auraMod: "Charisma",
    resistance: [undefined, "light"],
    vulnerability: ["Afriad of the Dark", "dark"],
    speed: 35
  },
  intrinsics: {
    hitDice: d(1, 10),
    prof: {
      weapons: ["Swords", "simple melee weapons", "sidearms"],
      savingThrows: ["Charisma", "Strength"],
      skills: ["acrobatics", "athletics", "history", "investigation", "intimidation", "performance", "persuasion"]
    },
    equipment: [
      "A sword of your choice",
      "",
      "A sidearm with 3 clips"
    ]
  },
  featureTableExtras: [{
    title: "Inspirations",
    values: [r(1, 3), r(2, 4), r(3, 4), r(4, 4), r(5, 4), r(6, 2)].reduce((acc, val) => acc.concat(val))
  }, {
    title: "Inspiration Die",
    values: [rd(4, 3), rd(6), rd(8), rd(10), rd(12, 5)].reduce((acc, val) => acc.concat(val))
  }],
  f: featureMap,
  features: [
    featureMap.dawnbringer, featureMap.inspiring, featureMap.slashStab,
    featureMap.auraPoints,
    featureMap.heroStudies,
    featureMap.dash,
    featureMap.extraAttack,
    featureMap.doubleTeam,
    featureMap.lunge,
    featureMap.blindingStrike,
    featureMap.invisibility,
    featureMap.fearless,
    featureMap.lightAbsorbtion,
    featureMap.luminousSelf
  ],

  heroes: []
}
