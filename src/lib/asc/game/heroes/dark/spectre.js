import React from 'react'

import Typography from '@material-ui/core/Typography'

import {
  Calc,
  ConditionTerm,
  GameTerm,
  SkillTerm
} from '../../../../../components/asc'
import { Poem, featureTerm } from '../util'
import { makeFeature as f } from '../../classifications/util'

const Feature = featureTerm("shadowborne", "spectre")

const Blink = (props) => <Feature id="blink" {...props} />

const featureMap = {
  blink: f("Improved Blink", [6], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Beginning at Level 6, you may optionally make a melee attack immediately after using <Blink disableHover={disableTerms} />.
        This attack does not count as part of your Attack action.
      </Typography>
      <Typography paragraph>
        While in <Feature id="spectralForm" isHero disableHover={disableTerms} />, the first <Blink disableHover /> on during your turn is a
        free action, and you spend no Aura points involved in the cost of that <Blink disableHover />. You may use <Blink disableHover /> again
        normally as a bonus action on your turn.
      </Typography>
      <Typography paragraph={!noParagraph}>
        In addition, if you use <Blink disableHover /> while <ConditionTerm disableHover={disableTerms} term="prone" />,
        you may choose to no longer be <ConditionTerm disableHover term="prone" /> when you reappear.
      </Typography>
    </React.Fragment>
  )),
  cloak: f("Cloak of the Spectre", [11], ({ disableTerms, noParagraph }) => (
    <Typography paragraph={!noParagraph}>
      Starting at Level 11, you are <ConditionTerm term="invisible" disableHover={disableTerms} /> after the
      first <Blink disableHover={disableTerms} /> on your turn. The invisibility ends when you enter bright light or dim light, after you make
      an attack, or cast an ability. If you <Blink disableHover /> into a space of dim light, the invisibility ends at the end of your turn.
    </Typography>
  )),
  spectralForm: f("Spectral Form", [3], ({ disableTerms, noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        At Level 3, you immediately learn how to use <Blink disableHover={disableTerms} />. You also gain proficiency in
        one melee weapon of your choice that you did not already have proficiency in.
      </Typography>
      <Typography paragraph>
        As a bonus action on your turn, you can release the Aura within yourself to become a source of fear. Your body slowly emits black smoke,
        your clothes turn jet black (they revert back afterwards), and your eyes resemble that of a snake. Faint whispers can be heard emanating
        from your location and can be heard by anyone within 10 feet of you. All units within 10 feet of you that can see you must succeed a
        Charisma saving throw (<GameTerm disableHover={disableTerms} term="dc" /> <Calc>8 + your proficiency bonus + your Charisma modifier</Calc>)
        or become frightened of you until the end of your next turn. Units that are immune to being frightened automatically succeed this saving throw.
      </Typography>
      <Typography paragraph>
        For 1 minute (or until you end this effect as a bonus action), if you <Blink disableHover /> into a space within 10 feet of one or more units,
        those units must make the same saving throw described above, unless they previously succeeded the save within the duration
        of <Feature id="spectralForm" isHero disableHover /> or they are immune to being frightened. Once you use this feature, you can’t do so
        again until you finish a long rest.
      </Typography>
      <Typography paragraph={!noParagraph}>
        In addition, you can change your eyes to resemble a snake’s (elongated pupils) for a few seconds as part
        of <Feature id="auraPoints" sub="alterAppearance" disableHover={disableTerms} /> (your eyes change back afterward). You gain advantage
        on <SkillTerm disableHover={disableTerms} term="intimidation" /> checks against units within 5 feet of you that saw your eyes at any
        point during its change. The <GameTerm disableHover={disableTerms} term="gm" /> decides how long a unit may be intimidated by the display,
        if at all.
      </Typography>
    </React.Fragment>
  ))
}

export default {
  name: "Evelynn Blake",
  epithet: "The Spectre",
  quote: {
    text: "Run, playthings.",
    author: "Evelynn Blake to a group of Freelancers"
  },
  desc: ({ noParagraph }) => (
    <Poem paragraph={!noParagraph}>{[
      "Hush now child, I shall tell you a tale;",
      "A tale of a girl who turns all men pale.",
      "An orphan from Helix, with raven black hair,",
      "A beautiful maiden who made all others stare.",
      "Every day she was reminded of her past;",
      "So she decided that she would kill him at last.",
      "City by city, she visited them all,",
      "To find that man from the day we recall.",
      "She had plans to fulfill, a revenge to slake.",
      "For this girl’s name was Evelynn Blake.",
      "All those she killed, she did so with zeal.",
      "A death that made the bravest men squeal.",
      "So you best behave now, O child mine;",
      "Or the Spectre will come, lest you still whine.",
    ]}</Poem>
  ),
  f: featureMap,
  features: [
    featureMap.spectralForm,
    featureMap.blink,
    featureMap.cloak
  ]
}
