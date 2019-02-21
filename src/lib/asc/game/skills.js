import React from 'react'

import Typography from '@material-ui/core/Typography'

import {
  ClassificationTerm,
  ConditionTerm,
  GameTerm
} from '../../../components/asc'

const s = (name, aptitude, caption, desc) => ({name, aptitude, caption, desc})

export const acrobatics = s(
  "Acrobatics",
  "Dexterity",
  "",
  ({disableTerms}) => (
    <Typography paragraph>
      An Acrobatics check determines how well you can keep your balance or footing during a task. Common situations typically encompass
      slippery or unstable areas; such as walking across ice or a narrow walkway/bridge. The <GameTerm disableHover={disableTerms} term="gm"/>
      may also ask for this check when you want to make a precise adjustment while running, like jumping over a table. A critical fail on
      an Acrobatics check may cause your character to become <ConditionTerm disableHover={disableTerms} term="prone"/>.
    </Typography>
  )
)

export const animalHandling = s(
  "Animal Handling",
  "Wisdom",
  "",
  () => (
    <Typography paragraph>
      An Animal Handling check determines how well you can control or coerce an animal. Common instances of this skill check include <b>training a
      pet</b>, <b>convicing an animal you are friendly</b>, and <b>determing an animal's intentions</b>.
    </Typography>
  )
)

export const athletics = s(
  "Athletics",
  "Strength",
  "May be contested by: Athletics or Acrobatics",
  () => (
    <Typography paragraph>
      An Athletics check determines how well you can endure a troubling situation or apply brute force to an object. Common examples
      include <b>treading water for an extended period of time</b>, <b>forcing open a door</b>, <b>moving a heavy object</b>, and <b>standing
      you ground while something tries to move you</b>.
    </Typography>
  )
)

export const deception = s(
  "Deception",
  "Charisma",
  "Contested with: Insight",
  () => (
    <React.Fragment>
      <Typography paragraph>
        A Deception check determines how well you can hide the truth. Most of the time, this is done with vague wording or telling a
        direct or obvious lie. Common situations include <b>impersonation</b>, <b>giving someone false assurances</b>
        , and <b>passing misleading information</b>.
      </Typography>
      <Typography paragraph>
        Deception differs from Persuasion - while you may be trying to convince or "persuade" another character, it is considered <i>deception</i> if
        you are hiding the truth in some way.
      </Typography>
    </React.Fragment>
  )
)

export const history = s(
  "History",
  "Intelligence",
  "",
  () => (
    <Typography paragraph>
      A History check determines how well and accurate you can recall information about the history of Ecumene. For instance, his check may be
      prompted when you try to <b>indentify a building's historical significance</b>, <b>recall a historical battle</b>, or <b>identify a
      legendary person from a picture of them</b>.
    </Typography>
  )
)

export const insight = s(
  "Insight",
  "Wisdom",
  "Contested by: Deception or Persuasion",
  ({disableTerms}) => (
    <Typography paragraph>
      An Insight check determines how well you can deduce a person's intentions based on their body language, speech patterns, and mannerisms.
      Insight checks typically have a lower <GameTerm disableHover={disableTerms} term="dc"/> the better you know a person.
    </Typography>
  )
)

export const intimidation = s(
  "Intimidation",
  "Charisma",
  "",
  () => (
    <Typography paragraph>
      An Intimidation check determines how well you can threaten or scare another person or creature. A threat can be
      verbal, by using a specific combination of words to create an elaborate threat, or they can be physical, such as harming
      the person and stating that will continue to do so unless they unveil the information you want. Verbal threats can be implied or explicit.
    </Typography>
  )
)

export const investigation = s(
  "Investigation",
  "Intelligence",
  "",
  () => (
    <React.Fragment>
      <Typography paragraph>
        An Investigation check determines how well you can make a deduction or extrapolate information. Typical examples of Investigation checks
        include <b>asking around for the location of a specific landmark</b>, <b>searching for traps</b>, or <b>determining the weak points
        in a structure</b>.
      </Typography>
      <Typography paragraph>
        Investigation differs from Perception. Perception is usually considered to be passive (noticing something <b>as it
        happens</b>), while Investigation is usually prompted when a character makes a conscious decision to search for a specific thing.
        Investigation also implies <i>active</i> searching over time by moving objects or asking multiple people. The general rule of thumb is
        "find means Investigation; see/notice means Perception."
      </Typography>
    </React.Fragment>
  )
)

export const medicine = s(
  "Medicine",
  "Wisdom",
  "",
  ({disableTerms}) => (
    <React.Fragment>
      <Typography paragraph>
        A Medicine check determines how well you can use your medical knowledge and experience in a particular situation. The most common examples
        are <b>diagnosing a disease or infection</b> and <b>applying first aid</b>.
      </Typography>
      <Typography paragraph>
        The <GameTerm disableHover={disableTerms} term="gm"/> may require you to be proficient in this skill in order to pass certain Medicine checks.
      </Typography>
    </React.Fragment>
  )
)

export const nature = s(
  "Nature",
  "Intelligence",
  "",
  () => (
    <Typography paragraph>
      A Nature checks how well you can recall information about the landscapes, plants, animals, and weather cycles of Ecumene.
    </Typography>
  )
)

export const perception = s(
  "Perception",
  "Wisdom",
  "",
  () => (
    <React.Fragment>
      <Typography paragraph>
        A Perception check determines how well you sense the presence of an object or creature using your senses. Common examples
        include <b>listening to a conversation through a wall/door</b>, <b>spotting a specific face in a crowd of people</b>,
        or <b>discerning the identity of an obscured object/creature</b>.
      </Typography>
      <Typography paragraph>
        Perception differs from Investigation. Perception is normally used to notice an event as it is happening, while Investigation implies an
        active search. The general rule of thumb is "see/notice means Perception; find means Investigation."
      </Typography>
    </React.Fragment>
  )
)

export const performance = s(
  "Performance",
  "Charisma",
  "",
  () => (
    <Typography paragraph>
      A Performance check indicates how well you can dance, play an instrument, act, or perform some other type of entertainment.
      Available entertainment and standards vary by area.
    </Typography>
  )
)

export const persuasion = s(
  "Persuasion",
  "Charisma",
  "Contested with: Insight",
  () => (
    <Typography paragraph>
      A Persuasion check determines how well you can influence another person or creature's actions with your own benevolent actions,
      without false pretenses. Examples include <b>convincing a group you are friendly by laying down your weapons</b>, <b>bribing a
      gaurd</b>, or <b>convincing a group to agree with your point of view</b>.
    </Typography>
  )
)

export const sleightOfHand = s(
  "Sleight of Hand",
  "Dexterity",
  "Contested with: Perception",
  () => (
    <Typography paragraph>
      A Sleight of Hand check determines how well you can conceal or move an object without anyone noticing. Common examples
      include <b>pickpocketing</b>, <b>placing a small object into somone else's pocket</b>, and <b>cheating in a card game</b>.
    </Typography>
  )
)

export const stealth = s(
  "Stealth",
  "Dexterity",
  "Contested with: Perception",
  ({disableTerms}) => (
    <React.Fragment>
      <Typography paragraph>
        A Stealth check detmines how well you can stay out of sight from onlookers. Typical situations include <b>eavesdropping</b> and <b>traveling
        through a crowded/gaurded area</b> <i>without being detected</i>.
      </Typography>
      <Typography paragraph>
        <ClassificationTerm disableHover={disableTerms} term="shadowborne"/> are particularly adept at Stealth.
      </Typography>
    </React.Fragment>
  )
)

const skills = [
  acrobatics,
  animalHandling,
  athletics,
  deception,
  history,
  insight,
  intimidation,
  investigation,
  medicine,
  nature,
  perception,
  performance,
  persuasion,
  sleightOfHand,
  stealth
]

export default skills
export const byAptitude = skills.reduce((acc, obj) => {
  const apt = obj.aptitude
  if(!acc[apt]) acc[apt] = []
  acc[apt].push(obj)
  return acc
}, {})
