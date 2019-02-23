import React from 'react'

import Typography from '@material-ui/core/Typography'

// import { featureTerm } from '../util'
import { makeFeature as f } from '../../classifications/util'

// const Feature = featureTerm("aurora", "angel")

const featureMap = {
  heavensent: f("Heavensent", [3], ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Upon reaching Level 3 when you choose to study this Hero, you can use your bonus action to release the Aura within yourself and
        inspire those around you. For the next minute, or until you end the effect as a bonus action, your figure emits a slight glow
        (5 feet of dim light) and white, translucent, feathered wings spread from your shoulders.
      </Typography>
      <Typography paragraph>
        All allies within 40 feet of you are immediately inspired if they were not already. These same allies remain inspired as
        long as you are within their line of sight, even after using an Inspiration die. However, they may only use 1 Inspiration die during
        their turn and cannot use more than 2 Inspiration dice for the duration of this feature. At the end of this feature’s duration,
        they are no longer Inspired.
      </Typography>
      <Typography paragraph={!noParagraph}>
        Once you use this feature, you must finish a long rest before using it again.
      </Typography>
    </React.Fragment>
  )),
  protector: f("Protector", [6], ({ noParagraph }) => (
    <React.Fragment>
      <Typography paragraph>
        Upon reaching Level 6, you learn the ability Hard Light Barrier if you have not already,
        and it does not count against your known abilities for your level.
      </Typography>
      <Typography paragraph={!noParagraph}>
        In addition, you can cast Hard Light Shield as a reaction to a melee attack that would hit you.
      </Typography>
    </React.Fragment>
  ))
}

export default {
  name: "Phoebe Orion",
  epithet: "The Angel",
  quote: {},
  desc: () => null,
  f: featureMap,
  features: [
    featureMap.heavensent,
    featureMap.protector
  ]
}
