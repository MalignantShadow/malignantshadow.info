import React from 'react'

import Typography from '@material-ui/core/Typography'

import { FeatureTerm } from '../../../../components/asc'

export const Poem = ({ children, paragraph }) => (
  <React.Fragment>
    {children.map((e, i) => (
      <Typography key={i} paragraph={paragraph && i === children.length - 1}><i>{e}</i></Typography>
    ))}
  </React.Fragment>
)

export const featureTerm = (classId, heroId) => ({ id, isHero, ...props }) =>
  <FeatureTerm
    classification={classId}
    feature={id}
    hero={isHero && heroId}
    {...props}
  />
