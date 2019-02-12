import Home from '../../pages/asc/home'
import Reference from '../../pages/asc/reference'
import Skills from '../../pages/asc/ref/skills'

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
          aurora: empty,
          golem: empty,
          maelstrom: empty,
          salamander: empty,
          shadowborne: empty,
          tempest: empty
        }
      },
      skills: Skills,
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