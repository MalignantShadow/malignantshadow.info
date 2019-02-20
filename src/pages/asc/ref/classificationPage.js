import React from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

import {
  AscPage,
  AscSection,
  AscTable,
  Calc,
  DiceTerm,
  RpgTypography
 } from '../../../components/asc'
 import { slug } from '../../../lib/routing'
 import { styledTocItem } from '../../../components/asc/util'
 import * as classifications from '../../../lib/asc/game/classifications'

export default withStyles(theme => ({
  tablePaper: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    fontSize: "2.25rem",
    marginRight: theme.spacing.unit
  },
  pageTitle: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  }
}))(withRouter(({classes, match: {params: {id}}}) => {
  const c = classifications[id]
  if(!c) return "Encountered an uh-oh"
  const {name, speed = 35, auraMod, icon: Icon, desc: Desc, traits, intrinsics, features, featureTableExtras} = c

  const TocItem = styledTocItem(theme => theme.asc.class[id])

  const upTo20 = new Array(20).fill(0)

  const toc = <React.Fragment>
    <TocItem title href="#topContent">Classification: {name}</TocItem>
    <Divider/>
    <TocItem href="#traits">Traits</TocItem>
    <TocItem href="#features">Features</TocItem>
    {features.map((e, i) => (
      <React.Fragment key={"frag" + i}>
        <TocItem key={"feature" + i} href={`#${slug(e.title)}`} depth={1}>{e.title}</TocItem>
        {e.subFeatures && e.subFeatures.map((sub, j) => (
          <TocItem key={"feature" + i + "sub" + j} href={`#${slug(e.title)}.${slug(sub.title)}`} depth={2}>{sub.title}</TocItem>
        ))}
      </React.Fragment>

    ))}
  </React.Fragment>

  const featureNames = []
  features.forEach((e) => {
    e.levels.forEach((level, i) => {
      if(!featureNames[level]) featureNames[level] = []
      featureNames[level].push(i > 0 ? e.titleAfterFirst || e.title : e.title)
    })
  })

  let sortedTraits = [
    ["Armor Class", <React.Fragment>Your armor class is equal to <Calc>{traits.ac[0]} + your {traits.ac[1]} modifier + your {traits.ac[2]} modifier</Calc>.</React.Fragment>],
    ["Aptitude Score Increases",traits.scoreIncreases.map(([apt, num], i) =>
      `${i === 0 ? "Y" : "y"}our ${apt} score is ${num > 0 ? "raised" : "decreased"} by ${Math.abs(num)}
       ${i === traits.scoreIncreases.length - 1 ? "." : ", "}${i === traits.scoreIncreases.length - 2 ? "and " : ""}`
    )],
    ["Aura", `You use ${auraMod} as your Aura modifier.`],
    ["Speed", `Your base movement speed is ${speed} feet.`],
    [traits.resistance[0] || `${name} Resillience`, `You are resistant ${traits.resistance[1]} damage`],
    [traits.vulnerability[0] || `${name} Vulnerabilities`, `You are vulnerabile to ${traits.vulnerability[1]} damage`],
  ]
  if(traits.extra)
    sortedTraits = sortedTraits.concat(traits.extra)

  sortedTraits.sort(([a], [b]) => a - b)

  return (
    <AscPage toc={toc} BreadcrumbProps={{extra: [{title: c.name}]}}>
      <AscSection
        id="topContent"
        variant="title"
        title={<React.Fragment>
          <Icon className={classes.icon}/>
          {name}
        </React.Fragment>}
        subtitle="Classification Details"
        classes={{heading: classes.pageTitle}}
      >
        <Desc/>
      </AscSection>
      <AscSection variant="h1" title="Traits">
        <Typography>As a {name}, you have a number of innate traits:</Typography>
        {sortedTraits.map(([title, desc], i) => (
          <RpgTypography key={i} title={title} paragraph={i === sortedTraits.length - 1}>{desc}</RpgTypography>
        ))}
      </AscSection>
      <AscSection variant="h2" title="Hit Dice"/>
      <Paper className={classes.tablePaper}>
        <AscTable head={["Hit Dice", "HP at Level 1", "HP After Level 1"]} body={[[
          <DiceTerm dice={intrinsics.hitDice}/>,
          <Calc>{intrinsics.hitDice.max} + your Constitution modifier</Calc>,
          <Calc><DiceTerm dice={intrinsics.hitDice}/> (or {intrinsics.hitDice.avg + 1}) + your Constitution modifier per Level after 1</Calc>
        ]]}/>
      </Paper>
      <AscSection variant="h1" title="Features">
        <Typography paragraph>You gain the following features as a {name}:</Typography>
      </AscSection>
      <Paper className={classes.tablePaper}>
        <AscTable
          head={[{
            text: "Level",
            align: "center"
          },
          ...(!featureTableExtras ? [] : featureTableExtras.map(({title}, i) => ({
            text: title,
            align: "center"
          }))),
          {
            text: "Feature",
            align: "center"
          }]}
          body={
            upTo20.map((e, i) => [
              i + 1,
              ...(!featureTableExtras ? [] : featureTableExtras.map(({values}) => {
                const Val = values[i]
                const render = typeof Val === "function" ? <Val/> : Val
                return { text: render, align: "center" }
              })),
              featureNames[i] ? featureNames[i].join(", ") : "---"
            ])
          }
        />
      </Paper>
    </AscPage>
  )
}))
