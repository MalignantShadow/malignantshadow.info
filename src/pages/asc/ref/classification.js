import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import {
  AscPage,
  AscTable,
  StatItem,
  Calc,
  DiceTerm,
  GameTerm,
  SkillTerm,
  TableOfContents,
  TocItem,
  AscAvatar,
  AscGrid as Grid,
  AscGridDetail as GridDetail,
  AscSection as Section,
  AscSeparator as Separator
} from '../../../components/asc'
import { Anchor } from '../../../components/common'
import { slug } from '../../../lib/routing'
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
  icon: {
    color: "#fff",
    fontSize: 128,
    float: "left",
    paddingBottom: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5,
    borderBottom: `4px solid ${theme.asc.accent}`
  },
  featureHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 1.5,
    marginTop: theme.spacing.unit * 3
  },
  featureTitle: {
    marginLeft: theme.spacing.unit * 2,
    fontSize: theme.typography.pxToRem(32),
    color: theme.asc.accent
  },
  featureDesc: {
    marginLeft: 64 + theme.spacing.unit * 2
  },
  desc: {
    display: "inline"
  }
}))(withRouter(({ classes, match: { params: { id } } }) => {
  const c = classifications[id]
  if (!c) return "Encountered an uh-oh"
  const { name, aspect, speed = 35, auraMod, icon: Icon, desc: Desc, traits, intrinsics, features, featureTableExtras, heroes } = c

  return (
    <AscPage BreadcrumbProps={{ extra: [{ title: c.name }] }} classes={{ toc: classes.tocPaper }}>
      <Icon className={classes.icon} />
      <div className={classes.desc}>
        <Desc />
      </div>
      {features.map(({ title, levels, desc: Desc }, i) => (
        <React.Fragment>
          <div className={classes.featureHeader}>
            <AscAvatar>{levels[0]}</AscAvatar>
            <Typography className={classes.featureTitle}>{title}</Typography>
          </div>
          <div className={classes.featureDesc}>
            <Desc />
          </div>
        </React.Fragment>
      ))}
    </AscPage>
  )
}))
