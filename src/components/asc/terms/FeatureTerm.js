import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import TermBase from './TermBase'
import ClassificationTerm from './ClassificationTerm'
import * as classifications from '../../../lib/asc/game/classifications'
import * as heroes from '../../../lib/asc/game/heroes'
import { stats, styleCategory, styleTerm } from './util'
import { slug } from '../../../lib/routing'

const FeatureTerm = withStyles(theme => ({
  tooltip: { width: 775 }, // same as D&DBeyond
  ...styleCategory(theme.asc.term.feature),
  ...Object.entries(theme.asc.class).map(([k, v]) => styleTerm(v.main, {}, `term-${k}`))
}))(({classes, classification, hero, feature, sub, ...other}) => {
  const c = classifications[classification]
  const h = hero && heroes[hero]
  const {[feature]: parentF } = h ? h.f : c.f
  const subF = sub && parentF.subFeatures[parentF.subFeatures.findIndex(e => e.key === sub)]

  const colorSelector = theme => theme.asc.class[classification]
  const Stats = stats(colorSelector)

  const Desc = (subF || parentF).desc
  const name = (subF || parentF).title

  return (
    <TermBase
      category="Feature"
      icon={c.icon}
      name={name}
      classes={{
        category: classes.category,
        term: classes[`term-${classification}`],
        tooltip: classes.tooltip
      }}
      href={`/ref/classifications/${classification}#${h ? `hero.${slug(h.name)}.${slug(parentF.title)}` : `${slug(name)}`}${subF ? `.${slug(subF.title)}` : ""}`}
      {...other}
    >
      <Stats>
        <React.Fragment>
          <b>Classification: </b><ClassificationTerm disableHover term={classification}/>
        </React.Fragment>
        {h &&
          <React.Fragment>
            <b>Hero: </b>{h.name}
          </React.Fragment>
        }
        <React.Fragment>
          <b>Level Learned: </b>{parentF.levels[0]}
        </React.Fragment>
        {subF &&
          <React.Fragment>
            <b>Sub-feature of: </b><FeatureTerm classification={classification} feature={feature} disableHover/>
          </React.Fragment>
        }
      </Stats>
      <Desc disableTerms noParagraph/>
    </TermBase>
  )
})

export default FeatureTerm
