import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {
  GameTerm,
  AscTable,
  ConditionTerm
} from "../../../components/asc"

const c = (name, desc, other) => ({ name, desc, ...other })

const List = ({ children, ...other }) => (
  <ul {...other}>
    {children.map ? children.map((e, i) => (
      <li key={i}><Typography>{e}</Typography></li>
    )) :
      <li><Typography>{children}</Typography></li>
    }
  </ul>
)

const Table = withStyles(theme => ({
  headCell: {
    backgroundColor: theme.asc.conditions.dark,
    color: theme.palette.getContrastText(theme.asc.conditions.dark)
  }
}))(({ classes, ...other }) => (
  <AscTable classes={{ headCell: classes.headCell }} {...other} />
))

const AttackRoll = ({ against, variant, type, disableHover }) => (
  <>
    {type === "ranged" && "Ranged "}
    {type === "melee" && "Melee "}
    {type ? "a" : "A"}ttack rolls {against ? "against" : "made by"} the unit
    have <GameTerm term={variant} disableHover={disableHover} />.
  </>
)

export const blinded = c("Blinded", ({ disableTerms }) => (
  <List>
    <>The unit cannot see and automatically fails any aptitude or skill checks that require sight.</>
    <AttackRoll variant="disadvantage" disableHover={disableTerms} />
    <AttackRoll against variant="advantage" disableHover={disableTerms} />
  </List>
))

export const compromised = c("Compromised", () => (
  <List>
    <>The unit automatically fails Strength and Dexterity saving throws.</>
    <AttackRoll against variant="advantage" />
  </List>
))

export const charmed = c("Charmed", ({ disableTerms }) => (
  <List>
    <>The unit cannot attack or cast an offensive ability at the charmer.</>
    <>The charmer has <GameTerm term="advantage" disableHover={disableTerms} /> on social interactions with the unit.</>
  </List>
))

export const deafened = c("Deafened", () => (
  <List>
    The unit cannot hear reliably. They automatically fail any aptitude check that requires hearing.
  </List>
))

export const exhaustion = c("Exhaustion", ({ disableTerms, noParagraph }) => (
  <>
    <Typography>
      <b>Exhaustion</b> represents how physically encumbered a unit is from lack of sleep or another effect. Exhaustion is measured in
      six levels, shown below:
    </Typography>
    <Table
      head={["Level", "Effect"]}
      body={[
        ["1", <><GameTerm term="disadvantage" disableHover={disableTerms} /> on aptitude checks</>],
        ["2", "Movement speed halved"],
        ["3", <><GameTerm term="disadvantage" disableHover /> on attack rolls and saving throws</>],
        ["4", "Hit point and Aura point maximum halved"],
        ["5", "Movement speed reduced to 0"],
        ["6", "Death"]
      ]}
    />
    {!disableTerms && <>
      <Typography paragraph>
        If an Exhausted unit suffers from an effect that causes Exhaustion, their level of Exhaustion increases by the amount
        specified by the effect. An Exhausted unit suffers all effects as shown for their level and below. For example, a unit suffering
        from 2 levels of Exhaustion has their <b>speed reduced to half</b> and <b>Disadvantage on aptitude checks</b>.
      </Typography>
      <Typography paragraph={!noParagraph}>
        Finishing a long rest reduces a unit's Exhaustion level by 1. All Exhaustion effects end if the unit's Exhaustion> level
        is reduced below 1.
      </Typography>
    </>}
  </>
))

export const frightened = c("Frightened", ({ disableTerms }) => (
  <List>
    <>
      The unit has <GameTerm term="disadvantage" disableHover={disableTerms} /> on aptitude checks and attack rolls if the source of their fear
      is within their line of sight.
    </>
    <>The unit cannot willingly move closer to the source of its fear.</>
  </List>
))

export const incapacitated = c("Incapacitated", () => (
  <List>
    The unit cannot take actions or reactions.
  </List>
))

export const invisible = c("Invisible", ({ disableTerms }) => (
  <List>
    <>The unit is impossible to see without special equipment or senses.</>
    <>The unit is considered heavily obscured, and can be revealed if it makes noise or tracks.</>
    <AttackRoll variant="advantage" disableHover={disableTerms} />
    <AttackRoll against variant="disadvantage" disableHover={disableTerms} />
  </List>
))

export const grappled = c("Grappled", ({ disableTerms }) => (
  <List>
    <>The unit is <ConditionTerm term="rooted" disableHover={disableTerms} />.</>
    <>
      The condition ends if the grappler is <ConditionTerm term="incapacitated" disableHover={disableTerms} /> or if
      the unit is removed from the reach of the grappler.
    </>
  </List>
))

export const paralyzed = c("Paralyzed", ({ disableTerms }) => (
  <List>
    <>
      The unit is <ConditionTerm term="incapacitated" disableHover={disableTerms} />, <ConditionTerm term="rooted" disableHover={disableTerms} />,
      and <ConditionTerm term="compromised" disableHover={disableTerms} />.
    </>
    <>Attackers within 5 feet of the unit score critical hits if their attacks hit the unit.</>
  </List>
))

export const poisoned = c("Poisoned", ({ disableTerms }) => (
  <List>
    <>The unit has <GameTerm term="disadvantage" disableHover={disableTerms} /> on attack rolls and saving throws.</>
  </List>
))

export const prone = c("Prone", ({ disableTerms }) => (
  <List>
    <>The unit's only movement option is to crawl or stand up. Standing up costs half the unit's movement and ends this condition.</>
    <AttackRoll variant="disadvantage" disableHover={disableTerms} />
    <>
      <AttackRoll variant="disadvantage" disableHover /> If the attacker is within 5 feet, the attack roll
      has <GameTerm term="advantage" disableHover={disableTerms} /> instead.
    </>
  </List>
))

export const rooted = c("Rooted", () => (
  <List>
    <>The unit has a movement speed of 0.</>
    <AttackRoll variant="disadvantage" type="melee" />
  </List>
))

export const silenced = c("Silenced", () => (
  <List>
    The unit cannot cast abilities.
  </List>
))

export const stunned = c("Stunned", ({ disableTerms }) => (
  <List>
    <>
      The unit is <ConditionTerm term="incapacitated" disableHover={disableTerms} /> and <ConditionTerm term="compromised" disableHover={disableTerms} />.
    </>
    <>The unit cannot move.</>
    <>
      The unit can only speak falteringly.
    </>
  </List>
))

export const unconscious = c("Unconscious", ({ disableTerms }) => (
  <List>
    <>The unit drops everything it is holding and falls <ConditionTerm term="prone" disableHover={disableTerms} />.</>
    <>
      The unit is <ConditionTerm term="incapacitated" disableHover={disableTerms} /> and <ConditionTerm term="compromised" disableHover={disableTerms} />.
    </>
    <>The unit cannot move.</>
    <>Attackers within 5 feet of the unit score critical hits if their attacks hit the unit.</>
  </List>
))

export default [
  blinded,
  charmed,
  compromised,
  exhaustion,
  deafened,
  frightened,
  grappled,
  incapacitated,
  invisible,
  paralyzed,
  poisoned,
  prone,
  rooted,
  silenced,
  stunned,
  unconscious
]
