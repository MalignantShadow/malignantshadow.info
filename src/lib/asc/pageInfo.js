import Home from '../../pages/asc/home'
import Reference from '../../pages/asc/reference'

import {
  SkillsPage,
  ClassificationPage,
  ConditionsPage
} from '../../pages/asc/ref'

const empty = () => null

export default {
  home: Home,
  rules: {
    page: empty,
    children: {
      combat: empty,
      social: empty,
      aptitudeScores: empty
    }
  },
  ref: {
    page: Reference,
    children: {
      abilities: empty,
      classifications: {
        page: empty,
        children: {
          byId: ClassificationPage
        }
      },
      conditions: ConditionsPage,
      skills: SkillsPage,
      feats: empty
    }
  },
  tools: {
    page: empty,
    children: {
      createCharacter: empty,
      map: empty
    }
  }
}
