import React from 'react'

import TermBase from './TermBase'
import { dictionary } from '../../../lib/asc/game'

export default ({term: termProp}) => {
  const term = dictionary[termProp]
  return (
    <TermBase
      text={term.name}
      TooltipProps={{
        title: term.desc,
        classes: {},
        placement: "top",
        TransitionComponent: undefined
      }} 
      href={term.href}
    />
  )
}
