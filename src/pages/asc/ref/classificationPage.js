import React from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import {
  AscPage,
  AscSection
 } from '../../../components/asc'
 import { skillsByAptitude } from '../../../lib/asc/game'
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
  const {name, features, featureTableExtras} = c

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

  return (
    <AscPage toc={toc} BreadcrumbProps={{extra: [{title: c.name}]}}>
      <AscSection id="topContent" variant="title" title={name} subtitle="Classification Details">

      </AscSection>
      <AscSection variant="h1" title="Features">
        <Typography>You gain the following features as a {name}:</Typography>
        <Table>
          <TableHead><TableRow>
            <TableCell align="center">Level</TableCell>
            {featureTableExtras && featureTableExtras.map(({title}, i) => (
              <TableCell key={i} align="center">{title}</TableCell>
            ))}
            <TableCell align="center">Feature</TableCell>
          </TableRow></TableHead>
          <TableBody>
            {upTo20.map((e, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                {featureTableExtras && featureTableExtras.map(({values}, j) => {
                  const Val = values[i]
                  const render = typeof Val === "function" ? <Val/> : Val
                  return <TableCell key={"extras" + j} align="center">{render}</TableCell>
                })}
                <TableCell>
                  {featureNames[i] ? featureNames[i].join(", ") : "---"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AscSection>
    </AscPage>
  )
}))
