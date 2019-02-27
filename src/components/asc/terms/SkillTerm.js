import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import TermBase from './TermBase'
import * as skills from '../../../lib/asc/game/skills'
import { stats, styleTerm, styleCategory } from './util'
import { slug } from '../../../lib/routing'

const colorSelector = theme => theme.asc.skills
const SkillStats = stats(colorSelector)

export default withStyles(theme => {
  const color = colorSelector(theme)
  return {
    ...styleTerm(color),
    ...styleCategory(color, { color: "#000" }),
    root: {
      display: "flex",
      flexDirection: "column"
    }
  }
})(({ classes, term, ...other }) => {
  const { name, aptitude, caption, desc: Desc } = skills[term]
  return (
    <TermBase
      name={name}
      category="Skill"
      href={`/ref/skills#${slug(name)}`}
      classes={{
        term: classes.term,
        category: classes.category
      }}
      {...other}
    >
      <SkillStats>
        <React.Fragment><b>Aptitude</b>: {aptitude}</React.Fragment>
        {caption &&
          <i>{caption}</i>
        }
      </SkillStats>
      <Desc disableTerms noParagraph />
    </TermBase>
  )
})
