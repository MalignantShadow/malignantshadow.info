import React from 'react'

import Typography from '@material-ui/core/Typography'

export const repeatVal = (val, amount) => new Array(amount).fill(val)

export const sortHeroes = heroes => Object.values(heroes).sort((a, b) => a.name - b.name)

export const makeFeature = (title, levels, desc, other) => {
  const obj = { title, desc }
  if (levels) obj.levels = levels
  return { ...obj, ...other }
}

export const makeSimpleFeature = (title, levels, desc, other) => makeFeature(title, levels, ({ noParagraph }) => (
  <Typography paragraph={!noParagraph}>{desc}</Typography>
), other)

export const makeSubFeature = (title, key, desc, other) => makeFeature(title, undefined, desc, { key, ...other })

export const makeParentFeature = (title, levels, desc, subFeatures, other) => makeFeature(title, levels, desc, { subFeatures, ...other })

//TODO: ConditionTerm for exhaustion
export const auraPointsFeature = (features) => makeParentFeature("Aura Points", [2], ({ noParagraph }) => (
  <React.Fragment>
    <Typography paragraph>
      Beginning at Level 2, you have a number of Aura points equal to your Level. Aura points can be used to add extra
      effects to your Classification Features.
      {features &&
        <span> You start by knowing {features.length} such feature{features.length === 1 ? "" : "s"}{": "}
          {features.map(({ title }, i) => (
            <React.Fragment key={i}><b>{title}</b>{i < features.length - 1 ? ", " : ""}{i === features.length - 2 ? "and " : ""}</React.Fragment>
          ))}.</span>
      }
    </Typography>
    <Typography paragraph>
      When you spend an Aura point, you do not regain it until you finish a short or long rest, at the end of which you regain
      all of your expended Aura points.
    </Typography>
    <Typography paragraph={!noParagraph}>
      When making exhaustion checks, you have advantage if your Aura points are full, and disadvantage if they are empty.
      At Level 1, since you have no Aura points, the roll is done normally.
    </Typography>
  </React.Fragment>
), features)

export const alterAppearanceSubFeature = makeSubFeature("Alter Appearance", "alterAppearance", () => (
  <React.Fragment>
    <Typography paragraph>
      As a bonus action, you spend 2 Aura points to alter your appearance in a combination of any of the following
      (effects last until you fall asleep, are knocked unconscious, die, or the listed actions occurs):
    </Typography>
    <ul>
      <li><Typography>
        You can change the color of any parts of your clothing, but you cannot change the size, trim, or material of the clothing
        (the effect on the clothing reverts to its original coloring if you remove them and are no longer making contact with them).
      </Typography></li>
      <li><Typography>
        You can change the color of your hair, but you cannot change the length or style of your hair as part of this effect (your
        hair reverts to its natural color if it is removed from your body).
      </Typography></li>
      <li><Typography>
        You can change the color of your eyes (they revert to its natural color if they are removed from your head).
      </Typography></li>
      <li><Typography>
        You cannot change your height, weight, or facial features/structure.
      </Typography></li>
      <li><Typography>
        You cannot hide or remove tattoos, birthmarks, scars, cuts, bruises, burns, or any other imperfections in the skin.
      </Typography></li>
      <li><Typography>
        You cannot change the color of your skin in any capacity.
      </Typography></li>
    </ul>
  </React.Fragment>
))

export const scoreImprovementFeature = makeSimpleFeature(
  "Aptitude Score Improvement",
  [4, 8, 12, 16, 19],
  "When you reach Levels 4, 8, 12, 16, and 19, you may raise two Aptitude Scores by 1 or two Aptitude scores by 1. You may instead choose a feat.")

export const extraAttackFeature = makeSimpleFeature(
  "Extra Attack",
  [5],
  "When you reach Level 5, you may attack twice, instead of once, when you take the Attack action on your turn."
)

export const heroStudiesFeature = makeSimpleFeature(
  "Hero Studies",
  [3, 6, 11, 17],
  `At Level 3, you undergo studying a Hero from the past to learn their tactics. Your chosen Hero Study grants you
   features at Level 3 and again at Levels 6, 11, and 17. You may also choose to learn that Hero’s abilities. You can only
   do so if you have chosen that particular Hero.`,
  { titleAfterFirst: "Hero Studies Feature" }
)
