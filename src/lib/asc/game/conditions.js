import React from 'react'

import Typography from '@material-ui/core/Typography'

import {
  GameTerm
} from "../../../components/asc"

const c = (name, desc, other) => ({ name, desc, ...other })

const List = ({children, ...other}) => (
  <ul {...other}>
    {children.map((e, i) => (
      <li key={i}><Typography>{e}</Typography></li>
    ))}
  </ul>
)

export const prone = c("Prone", ({disableTerms}) => (
  <List>
    <React.Fragment>
      The unit's only movement option is to crawl or stand up. Standing up costs half the unit's movement and ends this condition.
    </React.Fragment>
    <React.Fragment>
      The unit has <GameTerm term="disadvantage" disableHover={disableTerms}/> on attack rolls.
    </React.Fragment>
    <React.Fragment>
      Attack rolls against the unit have <GameTerm term="disadvantage" disableHover/>. If the attacker is within 5 feet, the attack roll
      has <GameTerm term="advantage" disableHover={disableTerms}/> instead.
    </React.Fragment>
  </List>
))

export const invisible = c("Invisible",  ({disableTerms}) => (
  <List>
    <React.Fragment>
      The unit is impossible to see without special equipment or senses.
    </React.Fragment>
    <React.Fragment>
      The unit is considered heavily obscured, and can be revealed if it makes noise or tracks.
    </React.Fragment>
    <React.Fragment>
      Attack rolls against the unit have <GameTerm term="disadvantage" disableHover={disableTerms}/>.
    </React.Fragment>
    <React.Fragment>
      Attacks rolls made by the unit have <GameTerm term="advantage" disableHover={disableTerms}/>.
    </React.Fragment>
  </List>
))

export default [
  invisible,
  prone
]
