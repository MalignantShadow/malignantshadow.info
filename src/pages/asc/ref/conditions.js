import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage, ConditionTerm, TocItem, AscSection as Section
} from '../../../components/asc'
import { slug } from '../../../lib/routing'
import conditions from '../../../lib/asc/game/conditions'

const toc = <React.Fragment>
  <TocItem title href="">Reference: Conditions</TocItem>
  <Divider />
  {conditions.map((c, i) => (
    <TocItem key={i} href={`#${slug(c.name)}`}>{c.name}</TocItem>
  ))}
</React.Fragment>

const page = (
  <AscPage toc={toc}>
    <Section id="#topContent" variant="title" title="Conditions" subtitle="Reference Page">
      <Typography paragraph>
        A <b>Condition</b> is an effect applied to a unit that modifies which actions they are allowed to take. In other games, this is typically
        called an <b>ailment</b> or <b>status effect</b>. A Condition ends when an effect listed in the Condition's description occurs or when
        an effect described in the source of the effect occurs. [example]
      </Typography>
      <Typography paragraph>
        A unit being subjected to a Condition they already have does not make that Condition worse unless otherwise stated
        (i.e. <ConditionTerm term="exhaustion" />). If a unit is subjected to an effect that causes them to suffer a condition that they already
        suffer from, the duration of the condition becomes the larger of the two effects. [example]
      </Typography>
    </Section>
    {conditions.map(({ name, desc: Desc }, i) => (
      <Section key={`condition-${name}`} title={name} variant="h2">
        <Desc />
      </Section>
    ))}
  </AscPage>
)

export default () => page
