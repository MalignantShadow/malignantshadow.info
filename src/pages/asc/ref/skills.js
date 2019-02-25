import React from 'react'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage,
  GameTerm
} from '../../../components/asc'
import { skillsByAptitude } from '../../../lib/asc/game'
import { slug } from '../../../lib/routing'
import { styledTocItem, styledSection } from '../../../components/asc/util'

const colorSelector = theme => theme.asc.skills
const Section = styledSection(colorSelector)
const SkillTocItem = styledTocItem(colorSelector)

const getTocItems = (key) => skillsByAptitude[key].map((e, i) => (
  <SkillTocItem key={key + i} href={`#${slug(e.name)}`} depth={1}>{e.name}</SkillTocItem>
))

const getSections = (key) => skillsByAptitude[key].map(({ name, caption, desc: Desc }, i) => (
  <Section key={name + i} variant="h2" title={name} caption={caption}>
    <Desc />
  </Section>
))

const toc = <React.Fragment>
  <SkillTocItem title href="">Reference: Skills</SkillTocItem>
  <Divider />
  <SkillTocItem href="#cha">Charisma</SkillTocItem>
  {getTocItems("Charisma")}
  <SkillTocItem href="#dex">Dexterity</SkillTocItem>
  {getTocItems("Dexterity")}
  <SkillTocItem href="#int">Intelligence</SkillTocItem>
  {getTocItems("Intelligence")}
  <SkillTocItem href="#str">Strength</SkillTocItem>
  {getTocItems("Strength")}
  <SkillTocItem href="#wis">Wisdom</SkillTocItem>
  {getTocItems("Wisdom")}
</React.Fragment>

const page = (
  <AscPage toc={toc}>
    <Section id="topContent" variant="title" title="Skills" subtitle="Reference Page">
      <Typography paragraph>
        A <b>Skill</b> is a pre-defined type of action in the game, associated with one of the six aptitudes (with the exception
        of Constitution). This section details the appropriate time to use each of these skills. Note that
        the <GameTerm term="gm" /> may decide, based on the situation, to you roll a general aptitude check instead of a skill check.
      </Typography>
      <Typography paragraph>
        This page does explain how to roll skill checks. It is only a reference page for the appropriate times a certain skill may be used.
      </Typography>
      <Typography paragraph>
        This page is more of a guide for <GameTerm term="gm" disable plural />, as they are the ones theat typically decide which check to call for based on the
        situation.
      </Typography>
    </Section>
    <Section id="cha" variant="h1" title="Charisma" caption="Measures one's strength of character.">
      <Typography paragraph>
        The <GameTerm term="gm" /> may call for a Charisma skill check when you want to talk or act/perform their way out of (or into)
        a situation.
      </Typography>
    </Section>
    {getSections("Charisma")}
    <Section id="dex" variant="h1" caption="Measures one's flexibility and agility." title="Dexterity">
      <Typography paragraph>
        The <GameTerm term="gm" /> may call for a Dexterity check when your character need to complete a task with balance, precision, or silence.
      </Typography>
    </Section>
    {getSections("Dexterity")}
    <Section id="int" variant="h1" title="Intelligence" caption="Measures one's mental acuity and memory.">
      <Typography paragraph>
        The <GameTerm term="gm" /> may call for an Intelligence check when to recall information or identify an object or place.
      </Typography>
    </Section>
    {getSections("Intelligence")}
    <Section id="str" variant="h1" title="Strength" caption="Measures one's ability to exert force.">
      <Typography paragraph>
        The <GameTerm term="gm" /> may call for a Strength when you want to use your raw physical power to accomplish a task.
      </Typography>
    </Section>
    {getSections("Strength")}
    <Section id="wis" variant="h1" title="Wisdom" caption="Measures one's worldly experience">
      <Typography paragraph>
        The <GameTerm term="gm" /> may call for a Wisdom check when you want to use your social or environmental perceptiveness to solve a problem.
      </Typography>
    </Section>
    {getSections("Wisdom")}
  </AscPage>
)

export default () => page
