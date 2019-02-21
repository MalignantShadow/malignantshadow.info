import React from 'react'
import classNames from 'classnames'
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
  SkillTerm
 } from '../../../components/asc'
 import { slug } from '../../../lib/routing'
 import { styledTocItem } from '../../../components/asc/util'
 import * as classifications from '../../../lib/asc/game/classifications'

const Features = ({children}) => (
  <React.Fragment>
    {children.map(({title, desc: Desc, levels: [level], subFeatures}, i) => (
      <React.Fragment key={i}>
        <AscSection variant="h2" title={title} caption={`Level ${level} Feature`}>
          <Desc/>
        </AscSection>
        {subFeatures && subFeatures.map(({title: subTitle, desc: SubDesc}, j) =>(
          <AscSection key={j} variant="h3" title={subTitle}>
            <SubDesc/>
          </AscSection>
        ))}
      </React.Fragment>
    ))}
  </React.Fragment>
)

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
    <TocItem href="#hit-dice" depth={1}>Hit Dice</TocItem>
    <TocItem href="#proficiencies" depth={1}>Proficiencies</TocItem>
    <TocItem href="#features">Features</TocItem>
  </React.Fragment>

  const featureNames = []
  features.forEach((e) => {
    e.levels.forEach((level, i) => {
      const index = level - 1
      if(!featureNames[index]) featureNames[index] = []
      featureNames[index].push(i > 0 ? e.titleAfterFirst || e.title : e.title)
    })
  })

  let sortedTraits = [
    ["Armor Class", <Calc>{traits.ac[0]} + your {traits.ac[1]} modifier + your {traits.ac[2]} modifier</Calc>],
    ["Aptitude Score Increases", traits.scoreIncreases.map(([apt, increase], i) => (
      `${apt} ${increase > 0 ? "+" : "-"} ${Math.abs(increase)}`
    )).join(", ")],
    ["Aura Modifier", auraMod],
    ["Speed", ` ${speed} feet`],
    [traits.resistance[0] || `${name} Resillience`, `You are resistant ${traits.resistance[1]} damage.`],
    [traits.vulnerability[0] || `${name} Vulnerabilities`, `You are vulnerabile to ${traits.vulnerability[1]} damage.`],
  ]
  if(traits.extra)
    sortedTraits = sortedTraits.concat(traits.extra)

  sortedTraits.sort(([a], [b]) => a - b)

  const Table = withStyles(theme  => ({
    headCell: {
      backgroundColor: theme.asc.class[id].main,
      color: theme.palette.getContrastText(theme.asc.class[id].main)
    },
    row: {
      "&:nth-child(4n+5) td:first-child": {
          backgroundColor: theme.asc.class[id].main,
          color: theme.palette.getContrastText(theme.asc.class[id].main)
      }
    }
  }))(({classes, features, ...other}) => (
    <AscTable classes={{
      headCell: classes.headCell,
      row: classNames({[classes.row]: features})
    }} {...other}/>
  ))

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
        <Paper className={classes.tablePaper}>
          <Table
            head={["Name", "Effect"]}
            body={[
              ...sortedTraits.map((e) => e)
            ]}
          />
        </Paper>
      </AscSection>
      <AscSection variant="h2" title="Hit Dice"/>
      <Paper className={classes.tablePaper}>
        <Table head={[{text: "Hit Dice", style: {width: 150}}, "HP at Level 1", "HP After Level 1"]} body={[[
          <DiceTerm dice={intrinsics.hitDice}/>,
          <Calc>{intrinsics.hitDice.max} + your Constitution modifier</Calc>,
          <Calc><DiceTerm dice={intrinsics.hitDice}/> (or {intrinsics.hitDice.avg + 1}) + your Constitution modifier per Level after 1</Calc>
        ]]}/>
      </Paper>
      <AscSection variant="h2" title="Proficiencies">
        <Typography>
            <b>Weapons</b>: {intrinsics.prof.weapons.join(", ")}
        </Typography>
        <Typography>
          <b>Saving Throws</b>: {intrinsics.prof.savingThrows.join(", ")}
        </Typography>
        <Typography paragraph>
          <b>Skills</b>: Choose 3 from {intrinsics.prof.skills.map((e, i) => (
            <React.Fragment key={i}><SkillTerm term={e}/>{i < intrinsics.prof.skills.length - 1 ? ", " : ""}</React.Fragment>
          ))}
        </Typography>
      </AscSection>
      <AscSection variant="h1" title="Features"/>
      <Paper className={classes.tablePaper}>
        <Table
          features
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
          body={upTo20.map((e, i) => [
            {text: i + 1, align: "center"},
            ...(!featureTableExtras ? [] : featureTableExtras.map(({values}) => {
              const Val = values[i]
              const render = typeof Val === "function" ? <Val/> : Val
              return { text: render, align: "center" }
            })),
            featureNames[i] ? featureNames[i].join(", ") : "---"
          ])}
        />
      </Paper>
      <Features>{features}</Features>
    </AscPage>
  )
}))
