import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {
  AscPage,
  AscSection,
  ConditionTerm,
  ClassificationTerm
 } from '../../../components/asc'

const Section = withStyles(theme => ({
  heading: { borderColor: theme.asc.abilities.main }
}))(({classes, children, ...other}) => (
  <AscSection className={classes.heading} {...other}>{children}</AscSection>
))

export default withStyles(theme => ({

}))(({classes}) => (
  <AscPage>
    <Section variant="title" title="Skills" subtitle="Reference Page">
      <Typography paragraph>
        A skill is a pre-defined type of action in the game, associated with one of the six aptitudes (with the exception
        of Constitution). This section details the appropriate time to use each of these skills. Note that the GM may
        decide, based on the situation, to you roll a general aptitude check instead of a skill check.
      </Typography>
    </Section>
    <Section id="cha" variant="h1" title="Charisma" caption="Measures one's strength of character.">
      <Typography paragraph>
        The GM may call for a Charisma skill check when you want to talk or act/perform their way out of (or into)
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
        The GM may call for a Dexterity check when your character need to complete a task with balance, precision, or silence.
      </Typography>
    </Section>
    <Section variant="h2" title="Acrobatics">
      <Typography paragraph>
        An Acrobatics check determines how well you can keep your balance or footing during a task. Common situations typically encompass
        slippery or unstable areas; such as walking across ice or a narrow walkway/bridge. The GM may also ask for this check when you
        want to make a precise adjustment while running, like jumping over a table. A critical fail on an Acrobatics check may cause your
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

      </Typography>
    </Section>
  </AscPage>
))
