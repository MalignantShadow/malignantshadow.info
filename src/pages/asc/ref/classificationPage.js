import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage,
  AscTable,
  Calc,
  DiceTerm,
  GameTerm,
  SkillTerm,
  TableOfContents
} from '../../../components/asc'
import { slug } from '../../../lib/routing'
import { styledTocItem, styledSection } from '../../../components/asc/util'
import * as classifications from '../../../lib/asc/game/classifications'

const Features = ({ children, idPrefix, Section }) => (
  <React.Fragment>
    {children.map(({ title, desc: Desc, levels: [level], subFeatures }, i) => {
      const id = idPrefix ? `${idPrefix}${slug(title)}` : slug(title)
      return (
        <React.Fragment key={i}>
          <Section id={id} variant="h2" title={title} caption={`Level ${level} Feature`}>
            <Desc />
          </Section>
          {subFeatures && subFeatures.map(({ title: subTitle, desc: SubDesc }, j) => (
            <Section id={`${id}.${slug(subTitle)}`} key={j} variant="h3" title={subTitle}>
              <SubDesc />
            </Section>
          ))}
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

export default withStyles(theme => ({
  tablePaper: {
    margin: theme.spacing.unit * 2,
    borderRadius: 0,
    boxShadow: "none"
  },
  tocPaper: {
    border: "none",
    background: "none"
  },
  icon: {
    fontSize: "2.25rem",
    marginRight: theme.spacing.unit
  },
  pageTitle: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  heroStudiesTitleMargin: {
    marginTop: theme.spacing.unit * 8
  },
  heroHeading: {
    "& > h6": {
      fontSize: "1rem"
    }
  },
  heroNameMargin: {
    marginTop: theme.spacing.unit * 5
  },
  toc: {
    "&:not(:first-child)": {
      marginTop: theme.spacing.unit * 3
    }
  }
}))(withRouter(({ classes, match: { params: { id } } }) => {
  const c = classifications[id]
  if (!c) return "Encountered an uh-oh"
  const { name, speed = 35, auraMod, icon: Icon, desc: Desc, traits, intrinsics, features, featureTableExtras, heroes } = c

  const colorSelector = theme => theme.asc.class[id]
  const Section = styledSection(colorSelector)
  const TocItem = styledTocItem(colorSelector)

  const upTo20 = new Array(20).fill(0)

  const toc = <React.Fragment>
    <TableOfContents className={classes.toc}>
      <TocItem title href="#topContent">Classification: {name}</TocItem>
      <Divider />
      <TocItem href="#traits">Traits</TocItem>
      <TocItem href="#hit-dice" depth={1}>Hit Dice</TocItem>
      <TocItem href="#proficiencies" depth={1}>Proficiencies</TocItem>
      <TocItem href="#features">Features</TocItem>
    </TableOfContents>
    <TableOfContents className={classes.toc}>
      <TocItem title href="#heroes">Hero Studies</TocItem>
      <Divider />
      {heroes && heroes.map(({ name }, i) => (
        <TocItem key={"hero" + i} href={`#hero.${slug(name)}`}>{name}</TocItem>
      ))}
    </TableOfContents>
  </React.Fragment>

  const featureNames = []
  features.forEach((e) => {
    e.levels.forEach((level, i) => {
      const index = level - 1
      if (!featureNames[index]) featureNames[index] = []
      featureNames[index].push(i > 0 ? e.titleAfterFirst || e.title : e.title)
    })
  })

  let sortedTraits = [
    ["Armor Class", <Calc>8 + your Dexterity modifier + your {auraMod} modifier</Calc>],
    ["Ability Save DC", <Calc>8 + your proficiency modifier + your {auraMod} modifier</Calc>],
    ["Aptitude Score Increases", traits.scoreIncreases.map(([apt, increase], i) => (
      `${apt} ${increase > 0 ? "+" : "-"} ${Math.abs(increase)}`
    )).join(", ")],
    ["Aura Modifier", auraMod],
    ["Speed", ` ${speed} feet`],
    [traits.resistance[0] || `${name} Resillience`, <React.Fragment>
      You are <GameTerm term="resistance" variant="adj" args={[traits.resistance[1]]} />
    </React.Fragment>],
    [traits.vulnerability[0] || `${name} Vulnerabilities`, <React.Fragment>
      You are <GameTerm term="vulnerability" variant="adj" args={[traits.vulnerability[1]]} />
    </React.Fragment>],
  ]
  if (traits.extra)
    sortedTraits = sortedTraits.concat(traits.extra)

  sortedTraits.sort(([a], [b]) => a - b)

  const Table = withStyles(theme => {
    const color = theme.asc.class[id]
    const headColor = color[color.table ? color.table : "main"]
    const modifyCell = {
      backgroundColor: headColor,
      color: theme.palette.getContrastText(headColor)
    }
    return {
      headCell: {
        ...modifyCell
      },
      featureRow: {
        "&:nth-child(4n+5) td:first-child": {
          ...modifyCell
        }
      }
    }
  })(({ classes, features, ...other }) => (
    <AscTable classes={{
      headCell: classes.headCell,
      row: classNames({ [classes.featureRow]: features })
    }} {...other} />
  ))


  return (
    <AscPage toc={toc} BreadcrumbProps={{ extra: [{ title: c.name }] }} classes={{ toc: classes.tocPaper }}>
      <Section
        id="topContent"
        variant="title"
        title={<React.Fragment>
          <Icon className={classes.icon} />
          {name}
        </React.Fragment>}
        subtitle="Classification Details"
        classes={{ heading: classes.pageTitle }}
      >
        <Desc />
      </Section>
      <Section variant="h1" title="Traits" />
      <Table
        head={["Name", "Effect"]}
        body={[
          ...sortedTraits.map((e) => e)
        ]}
      />
      <Section variant="h2" title="Hit Dice" />
      <Table head={[{ text: "Hit Dice", style: { width: 150 } }, "HP at Level 1", "HP After Level 1"]} body={[[
        <DiceTerm dice={intrinsics.hitDice} />,
        <Calc>{intrinsics.hitDice.max} + your Constitution modifier</Calc>,
        <Calc><DiceTerm dice={intrinsics.hitDice} /> (or {intrinsics.hitDice.avg + 1}) + your Constitution modifier per Level after 1</Calc>
      ]]} />
      <Section variant="h2" title="Proficiencies">
        <Typography>
          <b>Weapons</b>: {intrinsics.prof.weapons.join(", ")}
        </Typography>
        <Typography>
          <b>Saving Throws</b>: {intrinsics.prof.savingThrows.join(", ")}
        </Typography>
        <Typography paragraph>
          <b>Skills</b>: Choose 3 from {intrinsics.prof.skills.map((e, i) => (
            <React.Fragment key={i}><SkillTerm term={e} />{i < intrinsics.prof.skills.length - 1 ? ", " : ""}</React.Fragment>
          ))}
        </Typography>
      </Section>
      <Section variant="h1" title="Features" />
      <Table
        features
        head={[{
          text: "Level",
          align: "center"
        },
        ...(!featureTableExtras ? [] : featureTableExtras.map(({ title }, i) => ({
          text: title,
          align: "center"
        }))),
        {
          text: "Feature",
          align: "center"
        }]}
        body={upTo20.map((e, i) => [
          { text: i + 1, align: "center" },
          ...(!featureTableExtras ? [] : featureTableExtras.map(({ values }) => {
            const Val = values[i]
            const render = typeof Val === "function" ? <Val /> : Val
            return { text: render, align: "center" }
          })),
          featureNames[i] ? featureNames[i].join(", ") : "---"
        ])}
      />
      <Features Section={Section}>{features}</Features>
      <div className={classes.heroStudiesTitleMargin} />
      <Section id="heroes" variant="title" title={`${name} Hero Studies`}>
        <Typography paragraph>
          At Level 3, you choose to study one of the Heroes shown below. You gain the features shown in the description of your chosen Hero, and you
          can choose to learn the abilities shown in that Hero's description.
        </Typography>
      </Section>
      {heroes.map(({ name, epithet, quote, desc: Desc, abilities, features }, i) => {
        const heroSlug = `hero.${slug(name)}`
        return (
          <React.Fragment key={"hero-" + name}>
            <div className={i > 0 ? classes.heroNameMargin : undefined} />
            <Section id={heroSlug} variant="h1" title={name} subtitle={epithet} className={classes.heroHeading}>
              {quote && <React.Fragment>
                <Typography align="center"><i>"{quote.text}"</i></Typography>
                <Typography align="center" paragraph>― {quote.author}</Typography>
              </React.Fragment>}
              <Desc />
            </Section>
            {abilities &&
              <Section id={`${heroSlug}.abilities`} variant="h2" title="Abilities">

              </Section>
            }
            <Section id={`${heroSlug}.features`} variant="h2" title="Features" />
            <Table
              head={["Level", "Feature"]}
              body={[
                ...features.map(({ levels: [level], title }, i) => [level, title])
              ]}
            />
            <Features Section={Section} idPrefix={`${heroSlug}.`}>{features}</Features>
          </React.Fragment>
        )
      })}
    </AscPage>
  )
}))
