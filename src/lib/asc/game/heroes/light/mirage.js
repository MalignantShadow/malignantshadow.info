import React from 'react'

import Typography from '@material-ui/core/Typography'

import {
  ConditionTerm,
  GameTerm,
  RpgTypography
} from '../../../../../components/asc'
import { makeFeature as f } from '../../classifications/util'
import { featureTerm } from '../util'

const Feature = featureTerm("aurora", "mirage")

const Invisibility = (props) => <Feature id="invisibility" {...props} />

const featureMap = {
  radiance: f("Radiance", [3], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Starting at Level 3 when you choose to study this hero, you can release the Aura within yourself to shine brightly.
        For the next minute, or until you dismiss the effect as a bonus action, your figure emits an intense radiance.
        You emit 30 feet of bright light and 30 feet of dim light beyond that. All units in a space of dim light or darkness within 30 feet
        from you that can see the space you occupy must immediately succeed on a Constitution saving throw
        against your ability save DC or be <ConditionTerm term="blinded" disableHover={disableTerms} /> until the end of their next turn.
      </Typography>
      <Typography paragraph>
        For the duration, units that attack you do so at <GameTerm term="disadvantage" disableHover={disableTerms} /> ,and all light damage
        that you deal is doubled. Hostile units that can see you starting their turn or moving within 15 feet of you must make the
        same saving throw described above or be <ConditionTerm term="blinded" disableHover /> until the start of their next turn.
      </Typography>
      <Typography paragraph={!noParagraph}>
        Once you use this feature, you must complete a long rest before you can use it again.
      </Typography>
    </React.Fragment>
  )),
  reflectRefract: f("Reflect/Refract", [6], ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Beginning at Level 6, you can use your reaction to an attack that hits you to spend 2 Aura points and choose one of the
        following effects:
      </Typography>
      <RpgTypography title="Reflect" paragraph>
        If the attack includes light damage, you take no light damage. The damage is instead dealt to a unit that you can see within 10 feet of you.
      </RpgTypography>
      <RpgTypography title="Refact" paragraph={!noParagraph}>
        If the attack includes lightning, fire, or cold damage, choose one of those damage types. You take no damage of that type.
        Half of the damage is instead dealt to up to two units that you can see within 10 feet of you. You cannot choose the same unit twice, and
        you cannot choose the unit that attacked you.
      </RpgTypography>
    </React.Fragment>
  )),
  veil: f("Veil of the Mirage", [11], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Studying Clara Lux and her adept usage of <Invisibility disableHover={disableTerms} /> allows you to learn it earlier than most.
        At level 11, you learn how to use the <Invisibility disableHover /> feature.
      </Typography>
      <Typography paragraph={!noParagraph}>
        At Level 13, you can remain invisible for a total of 15 minutes before a long rest, instead of 10.
        This bonus increases to a total of 20 minutes at Level 15, and no limit at Level 18.
      </Typography>
    </React.Fragment>
  ))
}

export default {
  name: "Clara Lux",
  epithet: "The Mirage",
  quote: {
    text: "Good to see you too Hadley. Even if you couldn't see me.",
    author: <React.Fragment>Clara Lux to Cpt. River Hadley upon appearing on the bridge of the <i>ASC Gauntlet</i>.</React.Fragment>
  },
  desc: ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        The noble family of Lux is one of the most renown Aurora families in all of Ecumene. Clara, the eldest of three siblings,
        was the most adept in her manipulation of light; learning <Invisibility disableHover={disableTerms} /> at an earlier age than the few who
        have managed it. Her beauty and skill lended to her popularity when attending Index Academy,
        receiving many invitations from a variety of suitors, men and women alike.
      </Typography>
      <Typography paragraph={!noParagraph}>
        A few years after an early graduation, the news of Ambrosia’s fall spread to Helix,
        prompting a significant amount of her former teachers and friends advocating that she become the new head of the Academy.
        In her time as headmistress, Clara worked closely with NOVA as counselor.
        To this day, she remains close friends to the two operatives known as Shine and Shadow.
      </Typography>
    </React.Fragment>
  ),
  f: featureMap,
  features: [
    featureMap.radiance,
    featureMap.reflectRefract,
    featureMap.veil
  ]
}
