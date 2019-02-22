import React from "react"

import Typography from "@material-ui/core/Typography"

import {
  Calc,
  DiceTerm,
  FeatureTerm,
  GameTerm,
  SkillTerm
} from '../../../../../components/asc'
import d from "../../dice"

const Feature = ({ id, isHero, ...other }) => <FeatureTerm classification="shadowborne" hero={isHero && "spectre"} feature={id} {...other} />

const Blink = (props) => <Feature id="blink" {...props} />

const featureMap = {
  dodge: {
    title: "Trickster's Dodge",
    levels: [6],
    desc: ({ disableTerms, noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          At Level 6, you can Blink as a reaction to an attack against you. To do so, roll
          an <SkillTerm term="acrobatics" disableHover={disableTerms} /> check with the <GameTerm term="dc" disableHover={disableTerms} /> equal
          to the attacker’s attack roll. If the attack is a ranged attack, do so at disadvantage. If you succeed the
          check, you <Blink disableHover={disableTerms} /> away, and you cannot Blink again until the end of your next turn.
          If you fail the check, you receive damage as normal.
        </Typography>
        <Typography paragraph={!noParagraph}>
          You can only reactively <Blink disableHover={disableTerms} /> a maximum of 15 feet away, spending 1 Aura point as normal.
          You may extend the range of this <Blink disableHover /> by 5 feet by spending 1 additional Aura point.
        </Typography>
      </React.Fragment>
    )
  },
  shadowClones: {
    title: "Shadow Clones",
    levels: [11],
    desc: ({ disableTerms, noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          Upon reaching Level 11, you learn how to create illusory copies of yourself using the surrounding darkness. As an action,
          you can spend Aura points to create up to 2 shadow clones, each costing 1 Aura point. The clone(s) last for 1 minute, or until you
          lose concentration as if concentrating on an ability. Each clone appears in a space within 30 feet of you that you can see.
          You may have a maximum of 2 clones active at once.
        </Typography>
        <Typography paragraph>
          Shadow clones cannot speak or make noise, and they do not cast a shadow. They have
          an AC equal to <Calc>10 + your Intelligence modifier</Calc>, <DiceTerm dice={d(1, 4, 3)} disableHover={disableTerms} /> hit points,
          and an illusory copy of one of your weapons. As a bonus action of your turn, you can move one or both clones up to 30 feet to
          a space you can see, but they must remain within 100 feet of you. While a clone is present, you can use abilities as if your
          were in the clone’s space, but you must use your own senses. Additionally, if you and a clone are within 5 feet of a unit that can
          see the clone, you have <GameTerm term="advantage" disableHover={disableTerms} /> on attack rolls against that unit. When you first
          create a clone, you can modify the way it looks following the rules
          of <Feature id="auraPoints" sub="alterAppearance" disableHover={disableTerms} />.
        </Typography>
        <Typography paragraph>
          In addition, you can spend 1 additional Aura point when you use <Blink disableHover={disableTerms} /> to leave behind a shadow clone.
          This clone cannot move, but will make a weapon attack against the same target you do before the end of your turn, as long as the clone
          has line of sight. The clone makes its own attack roll using your Intelligence modifier as the attack modifier. If the attack hits,
          you add 1 <Feature id="fromShadows" disableHover={disableTerms} /> die to your damage roll. The clone disappears at the end of your turn.
        </Typography>
        <Typography paragraph>
          If you successfully <Blink disableHover /> in reaction to an attack against you and you choose to leave behind a clone, the clone takes
          the hit instead of you. The attack hits the clone if the attack would have normally hit you. If the attack would have missed anyway,
          the clone does not get hit.
        </Typography>
      </React.Fragment>
    )
  },
  touch: {
    title: "Trickster's Touch",
    levels: [3],
    desc: ({ noParagraph }) => (
      <React.Fragment>
        <Typography paragraph>
          Beginning at Level 3, you learn the Nudge ability if you haven’t already; it does not count against your known Tier 0 abilities
          for your level. In addition, you can use Nudge as a reaction to a target moving into a space you can see (you can still use the
          ability normally). If you do so, the ability has the following modifications:
        </Typography>
        <Typography component="div" paragraph={!noParagraph}>
          <ul>
            <li>You can choose at what point in the target’s movement you use the ability, as long as you can still see the target.</li>
            <li>If you choose <b>Backward</b>, the target’s loss of movement occurs immediately instead of its next turn.</li>
          </ul>
        </Typography>
      </React.Fragment>
    )
  }
}

export default {
  name: "Mercury Umbren",
  epithet: "The Trickster",
  desc: () => null,
  f: featureMap,
  features: [
    featureMap.touch,
    featureMap.dodge,
    featureMap.shadowClones
  ]
}
