import React from 'react'

import Typography from '@material-ui/core/Typography'

export const repeatVal = (val, amount) => new Array(amount).fill(val)

//TODO: ConditionTerm for exhaustion
export const auraPointsFeature = (features) => ({
  title: "Aura Points",
  levels: [2],
  desc: () => (
    <React.Fragment>
      <Typography paragraph>
        Beginning at Level 2, you have a number of Aura points equal to your Level. Aura points can be used to add extra
        effects to your Classification Features. You start by knowing {features.length} such features: { features.map(({name}, i) => (
          <React.Fragment><b key={i}>{name}</b>{i < features.length - 1 ? ", " : ""}</React.Fragment>
        ))}.
      </Typography>
      <Typography paragraph>
        When you spend an Aura point, you do not regain it until you finish a short or long rest, at the end of which you regain
        all of your expended Aura points.
      </Typography>
      <Typography paragraph>
        When making exhaustion checks, you have advantage if your Aura points are full, and disadvantage if they are empty.
        At Level 1, since you have no Aura points, the roll is done normally.
      </Typography>
    </React.Fragment>
  ),
  subFeatures: features
})

export const alterAppearanceSubFeature = () => ({
  title: "Alter Appearance",
  desc: (
    <React.Fragment>
      <Typography paragraph>
        As a bonus action, you spend 2 Aura points to alter your appearance in a combination of any of the following
        (effects last until you fall asleep, are knocked unconscious, die, or the listed actions occurs):
      </Typography>
      <ul>
        <li>
          You can change the color of any parts of your clothing, but you cannot change the size, trim, or material of the clothing
          (the effect on the clothing reverts to its original coloring if you remove them and are no longer making contact with them).
        </li>
        <li>
          You can change the color of your hair, but you cannot change the length or style of your hair as part of this effect (your
          hair reverts to its natural color if it is removed from your body).
        </li>
        <li>You can change the color of your eyes (they revert to its natural color if they are removed from your head).</li>
        <li>You cannot change your height, weight, or facial features/structure.</li>
        <li>You cannot hide or remove tattoos, birthmarks, scars, cuts, bruises, burns, or any other imperfections in the skin.</li>
        <li>You cannot change the color of your skin in any capacity.</li>
      </ul>
    </React.Fragment>
  )
})

export const heroStudiesFeature = () => ({
  title: "Hero Studies",
  titleAfterFirst: "Hero Studies Feature",
  levels: [3, 6, 11, 17],
  desc: (
    <Typography>
      At Level 3, you undergo studying a Hero from the past to learn their tactics. Your chosen Hero Study grants you
      features at Level 3 and again at Level 6, 11, and 17. You may also choose to learn that Hero’s abilities. You can only
      do so if you have chosen that Hero.
    </Typography>
  )
})
