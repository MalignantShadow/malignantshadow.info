import React from 'react'

import TermBase from './TermBase'
import { dictionary } from '../../../lib/asc/game'

export default ({term: termProp, plural, args, variant, ...other}) => {
  const term = dictionary[termProp]
  const { name, desc, plural: termPlural } = typeof term === "function" ? term(args, variant) : term
  return (
    <TermBase
      text={plural ? termPlural || `${name}s` : name}
      TooltipProps={{
        title: desc,
        classes: {},
        placement: "top",
        TransitionComponent: undefined
      }}
      href={term.href}
      {...other}
    />
  )
}
