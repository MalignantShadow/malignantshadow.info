import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { AscPage, AscSection } from '../../../components/asc'

const Section = withStyles(theme => ({
  heading: { borderColor: theme.asc.abilities.main }
}))(({classes, children, ...other}) => (
  <AscSection className={classes.heading} {...other}>{children}</AscSection>
))

export default withStyles(theme => ({

}))(({classes}) => (
  <AscPage>
    <Section variant="title" title="Skills" subtitle="reference">
      <Typography paragraph>
        A skill is a pre-defined type of action in the game, associated with one of the six aptitudes (with the exception
        of Constitution). This section details the appropriate time to use each of these skills. Note that the GM may
        decide, based on the situation, to you roll a general aptitude check instead of a skill check.
      </Typography>
    </Section>
    <Section id="cha" variant="h1" title="Charisma" caption="Measures one's strength of character.">
      <Typography  paragraph>
        The GM may call for a Charisma skill check when your character wants to talk or act/perform their way out of (or into)
        a situation.
      </Typography>
    </Section>
    <Section variant="h2" title="Deception">
      <Typography paragraph>
        A Deception check determines how well your character can hide the truth. Deception differs from persuasion; while
        your character may be trying to convince or "persuade" another character, it is considered <b>deception</b> if
        your character is hiding the truth in some way. Most of the time, this is done with vague wording or telling a
        direct or obvious lie. Common situations include <b>impersonation</b>, <b>giving someone false assurances</b>
        , and <b>passing misleading information</b>.
      </Typography>
    </Section>
    <Section variant="h2" title="Intimidation">
      <Typography paragraph>
        
      </Typography>
    </Section>
  </AscPage>
))
