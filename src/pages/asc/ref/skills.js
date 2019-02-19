import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage,
  AscSection,
  ConditionTerm,
  ClassificationTerm,
  GameTerm,
 } from '../../../components/asc'
 import { styledTocItem } from '../../../components/asc/util'

const Section = withStyles(theme => ({
  heading: { borderColor: theme.asc.abilities.main }
}))(({classes, children, ...other}) => (
  <AscSection className={classes.heading} {...other}>{children}</AscSection>
))

const SkillTocItem = styledTocItem(theme => theme.asc.abilities)

const toc = <React.Fragment>
  <SkillTocItem title href="#topContent">Reference: Skills</SkillTocItem>
  <Divider/>
  <SkillTocItem href="#cha">Charisma</SkillTocItem>
  <SkillTocItem href="#deception" depth={1}>Deception</SkillTocItem>
  <SkillTocItem href="#intimidation" depth={1}>Intimidation</SkillTocItem>
  <SkillTocItem href="#performance" depth={1}>Performance</SkillTocItem>
  <SkillTocItem href="#persuasion" depth={1}>Persuasion</SkillTocItem>
  <SkillTocItem href="#dex">Dexterity</SkillTocItem>
  <SkillTocItem href="#acrobatics" depth={1}>Acrobatics</SkillTocItem>
  <SkillTocItem href="#sleight-of-hand" depth={1}>Sleight of Hand</SkillTocItem>
  <SkillTocItem href="#stealth" depth={1}>Stealth</SkillTocItem>
  <SkillTocItem href="#int">Intelligence</SkillTocItem>
  <SkillTocItem href="#history" depth={1}>History</SkillTocItem>
  <SkillTocItem href="#investigation" depth={1}>Investigation</SkillTocItem>
  <SkillTocItem href="#nature" depth={1}>Nature</SkillTocItem>
  <SkillTocItem href="#str">Strength</SkillTocItem>
  <SkillTocItem href="#athletics" depth={1}>Athletics</SkillTocItem>
  <SkillTocItem href="#wis">Wisdom</SkillTocItem>
  <SkillTocItem href="#animal-handling" depth={1}>Animal Handling</SkillTocItem>
  <SkillTocItem href="#insight" depth={1}>Insight</SkillTocItem>
  <SkillTocItem href="#medicine" depth={1}>Medicine</SkillTocItem>
  <SkillTocItem href="#perception" depth={1}>Perception</SkillTocItem>
</React.Fragment>

export default withStyles(theme => ({


}))(({classes}) => (
  <AscPage toc={toc}>
    <Section id="topContent" variant="title" title="Skills" subtitle="Reference Page">
      <Typography paragraph>
        A skill is a pre-defined type of action in the game, associated with one of the six aptitudes (with the exception
        of Constitution). This section details the appropriate time to use each of these skills. Note that
        the <GameTerm term="gm"/> may decide, based on the situation, to you roll a general aptitude check instead of a skill check.
      </Typography>
      <Typography paragraph>
        This page does explain how to roll skill checks. It is only a reference page for the appropriate times a certain skill may be used.
      </Typography>
    </Section>
    <Section id="cha" variant="h1" title="Charisma" caption="Measures one's strength of character.">
      <Typography paragraph>
        The <GameTerm term="gm"/> may call for a Charisma skill check when you want to talk or act/perform their way out of (or into)
        a situation.
      </Typography>
    </Section>
    <Section variant="h2" title="Deception" caption="Contested with: Insight">
      <Typography paragraph>
        A Deception check determines how well you can hide the truth. Deception differs from Persuasion - while
        you may be trying to convince or "persuade" another character, it is considered <b>deception</b> if
        you are hiding the truth in some way. Most of the time, this is done with vague wording or telling a
        direct or obvious lie. Common situations include <b>impersonation</b>, <b>giving someone false assurances</b>
        , and <b>passing misleading information</b>.
      </Typography>
    </Section>
    <Section variant="h2" title="Intimidation">
      <Typography paragraph>
        An Intimidation check determines how well you can threaten or scare another person or creature. A threat can be
        verbal, by using a specific combination of words to create an elaborate threat, or they can be physical, such as harming
        the person and stating that will continue to do so unless they unveil the information you want. Verbal threats can be implied or explicit.
      </Typography>
      <ul>
        <li><Typography>
          An <i>explicit</i> threat is a statement that can be taken as a threat at face value, such as "<b>I'm gonna gouge out your eyes with a
          spoon</b>."
        </Typography></li>
        <li><Typography>
          An <i>implicit</i> threat is one that requires a bit of thinking in order to be considered a threat, such as "<b>That's a nice
         house, it'd be a shame if it caught fire</b>."
        </Typography></li>
      </ul>
    </Section>
    <Section variant="h2" title="Performance">
      <Typography paragraph>
        A Performance check indicates how well you can dance, play an instrument, act, or perform some other type of entertainment.
        Available entertainment and standards vary by area.
      </Typography>
    </Section>
    <Section variant="h2" title="Persuasion" caption="Contested with: Insight">
      <Typography paragraph>
        A Persuasion check determines how well you can influence another person or creature's actions with your own benevolent actions,
        without false pretenses. Examples include <b>convincing a group you are friendly by laying down your weapons</b>, <b>bribing a
        gaurd</b>, or <b>convincing a group to agree with your point of view</b>.
      </Typography>
    </Section>
    <Section id="dex" variant="h1" caption="Measures one's flexibility and agility." title="Dexterity">
      <Typography paragraph>
        The <GameTerm term="gm"/> may call for a Dexterity check when your character need to complete a task with balance, precision, or silence.
      </Typography>
    </Section>
    <Section variant="h2" title="Acrobatics">
      <Typography paragraph>
        An Acrobatics check determines how well you can keep your balance or footing during a task. Common situations typically encompass
        slippery or unstable areas; such as walking across ice or a narrow walkway/bridge. The <GameTerm term="gm"/> may also ask for this check when
        you want to make a precise adjustment while running, like jumping over a table. A critical fail on an Acrobatics check may cause your
        character to become <ConditionTerm term="prone"/>.
      </Typography>
    </Section>
    <Section variant="h2" title="Sleight of Hand" caption="Contested with: Perception">
      <Typography paragraph>
        A Sleight of Hand check determines how well you can conceal or move an object without anyone noticing. Common examples
        include <b>pickpocketing</b>, <b>placing a small object into somone else's pocket</b>, and <b>cheating in a card game</b>.
      </Typography>
    </Section>
    <Section variant="h2" title="Stealth" caption="Contested with: Perception">
      <Typography paragraph>
        A Stealth check detmines how well you can stay out of sight from onlookers. Typical situations include <b>eavesdropping</b> and <b>traveling
        through a crowded/gaurded area without being detected</b>. <ClassificationTerm term="shadowborne"/> are particularly adept at Stealth.
      </Typography>
    </Section>
    <Section id="int" variant="h1" title="Intelligence" caption="Measures one's mental acuity and memory.">
      <Typography paragraph>
          The <GameTerm term="gm"/> may call for an Intelligence check when to recall information or identify an object or place.
      </Typography>
    </Section>
    <Section variant="h2" title="History">
      <Typography paragraph>
        A History check determines how well and accurate you can recall information about the history of Ecumene. For instance, his check may be
        prompted when you try to <b>indentify a building's historical significance</b>, <b>recall a historical battle</b>, or <b>identify a
        legendary person from a picture of them</b>.
      </Typography>
    </Section>
    <Section variant="h2" title="Investigation">
      <Typography paragraph>
        An Investigation check determines how well you can make a deduction or extrapolate information. Typical examples of Investigation checks
        include <b>asking around for the location of a specific landmark</b>, <b>searching for traps</b>, or <b>determining the weak points
        in a structure</b>. Investigation differs from Perception; Perception is usually considered to be passive (noticing something <b>as it
        happens</b>), while Investigation is usually prompted when a character makes a conscious decision to search for a specific thing.
      </Typography>
    </Section>
    <Section variant="h2" title="Nature">
      <Typography paragraph>
        A Nature checks how well you can recall information about the landscapes, plants, animals, and weather cycles of Ecumene.
      </Typography>
    </Section>
    <Section variant="h1" title="Strength" caption="Measures one's ability to exert force.">
      <Typography paragraph>
        The <GameTerm term="gm"/> may call for a Strength when you want to use your raw physical power to accomplish a task.
      </Typography>
    </Section>
    <Section variant="h2" title="Athletics">
      <Typography paragraph>
        An Athletics check determines how well you can endure a troubling situation or apply brute force to an object. Common examples
        include <b>treading water for an extended period of time</b>, <b>forcing open a door</b>, <b>moving a heavy object</b>, and <b>standing
        you ground while something tries to move you</b>.
      </Typography>
    </Section>
    <Section variant="h1" title="Wisdom" caption="Measures one's worldly experience">
      <Typography paragraph>
        The <GameTerm term="gm"/> may call for a Wisdom check when you want to use your social or environmental perceptiveness to solve a problem.
      </Typography>
    </Section>
    <Section variant="h2" title="Animal Handling">
      <Typography paragraph>
        An Animal Handling check determines how well you can control or coerce an animal. Common instances of this skill check include <b>training a
        pet</b>, <b>convicing an animal you are friendly</b>, and <b>determing an animal's intentions</b>.
      </Typography>
    </Section>
    <Section variant="h2" title="Insight" caption="Contested by: Deception or Persuasion">
      <Typography paragraph>
        An Insight check determines how well you can deduce a person's intentions based on their body language, speech patterns, and mannerisms.
        Insight checks typically have a lower <GameTerm term="dc"/> the better you know a person.
      </Typography>
    </Section>
    <Section variant="h2" title="Medicine">
      <Typography paragraph>
        A Medicine check determines how well you can use your medical knowledge and experience in a particular situation. The most common examples
        are <b>diagnosing a disease or infection</b> and <b>applying first aid</b>.
      </Typography>
      <Typography paragraph>
        The <GameTerm term="gm"/> may require you to be proficient in this skill in order to pass certain Medicine checks.
      </Typography>
    </Section>
    <Section variant="h2" title="Perception" caption="Contested by: Stealth">
      <Typography paragraph>
        A Perception check determines how well you sense the presence of an object or creature using your senses. Common examples
        include <b>listening to a conversation through a wall/door</b>, <b>spotting a specific face in a crowd of people</b>,
        or <b>discerning the identity of an obscured object/creature</b>.
      </Typography>
      <Typography paragraph>
        Perception differs from Investigation. Perception is normally used to notice an event as it is happening, while Investigation implies an
        active search. The general rule of thumb is "see/notice means Perception; find means Investigation."
      </Typography>
    </Section>
  </AscPage>
))
