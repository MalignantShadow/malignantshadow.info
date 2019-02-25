import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage
} from '../../../components/asc'
import { slug } from '../../../lib/routing'
import { styledTocItem, styledSection } from '../../../components/asc/util'
import conditions from '../../../lib/asc/game/conditions'

const colorSelector = theme => theme.asc.conditions
const TocItem = styledTocItem(colorSelector)
const Section = styledSection(colorSelector)

const toc = <React.Fragment>
  <TocItem title href="">Conditions</TocItem>
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
        called an <b>ailment</b> or <b>status effect</b>.
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
