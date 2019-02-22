import React from "react"

import Typography from "@material-ui/core/Typography"

import {
  Calc,
  FeatureTerm
} from '../../../../../components/asc'

const Feature = ({ id, isHero, ...other }) => <FeatureTerm classification="shadowborne" hero={isHero && "deathAngel"} feature={id} {...other} />

const featureMap = {
  atDeathsDoor: {
    title: "At Death's Door",
    levels: [6],
    desc: ({ disableTerms, noParagraph }) => (
      <Typography paragraph={noParagraph}>
        Beginning at Level 6, your attacks are particularly more deadly when your target is close to death. When you make an attack
        against a unit that is at a third of its max hit points or lower, you deal an additional dark damage equal to your proficiency modifier.
        This damage is doubled if you scored a critical hit or you made the attack during the duration
        of <Feature isHero id="deathlyVisage" disableHover={disableTerms} />.
      </Typography>
    )
  },
  deathlyVisage: {
    title: "Deathly Visage",
    levels: [3],
    desc: ({ disableTerms, noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          Beginning at Level 3, you can use a bonus action on your turn to release the Aura within yourself and become an avatar
          of death itself. Your eyes turn completely black and ashen, and translucent skeletal or bat-like wings (of your choice)
          extend from your shoulders. For 1 minute, you gain extra <Feature id="fromShadows" disableHover={disableTerms} /> die equal to half of your
          proficiency modifier (rounded up), and you don’t spend any Aura points when
          using <Feature id="auraPoints" sub="curse" disableHover={disableTerms} />.
        </Typography>
        <Typography>Once you use this feature, you can't do so again until you finish a long rest.</Typography>
      </React.Fragment>
    )
  },
  lifesteal: {
    title: "Lifesteal",
    levels: [11],
    desc: ({ disableTerms, noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          Starting a level 11, your affinity with the surrounding darkness allows you to steal the very life essence from others.
          Once per turn during the duration of <Feature isHero id="deathlyVisage" disableHover={disableTerms} />,
          if you score a critical hit on a unit, you heal an amount of hit points equal to the total amount of dark damage involved in the attack,
          to a maximum of double your proficiency modifier. You can heal up to <Calc>your maximum hit points + 10</Calc>.
          The 10 extra hit points are considered temporary hit points and are lost at the end of <Feature isHero id="deathlyVisage" disableHover />.
        </Typography>
        <Typography paragraph={!noParagraph}>
          You may choose to split the healing between you and one ally. The ally must be within 30 feet of you,
          and they cannot heal over their maximum hit points. The healing effect is half as effective on non-Shadowborne allies.
        </Typography>
      </React.Fragment>
    )
  },
  neverRepent: {
    title: "Never Repent",
    levels: [17],
    desc: ({ noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          At Level 17, you learn the ability Malfeasance if you have not already.
          In addition, Malfeasance does not count against your known abilities.
        </Typography>
        <Typography paragraph={!noParagraph}>
          You can cast Malfeasance without expending a Tier 6 ability slot. Once you do so, you cannot do so again until you finish a
          long rest. You can still use Malfeasance normally.
        </Typography>
      </React.Fragment>
    )
  }
}

export default {
  name: "Lilith Grimm",
  epithet: "The Angel of Death",
  quote: {
    text: "I encourage violence.",
    author: "Lilith Grimm, to a group of freelancers with only a pool cue between them."
  },
  desc: ({ noParagraph }) => (
    <React.Fragment />
  ),
  f: featureMap,
  features: [
    featureMap.deathlyVisage,
    featureMap.atDeathsDoor,
    featureMap.lifesteal,
    featureMap.neverRepent
  ]
}
