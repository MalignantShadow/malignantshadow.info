import * as colors from '@material-ui/core/colors'
import dice from './dice'

//class icons
import {
  Shadowborne
} from '../../../components/asc/icons'

export const aurora = {
  name: "Aurora",
  aspect: "Dawn",
  icon: null,
  affinity: "Light",
  colors: {
    text: colors.grey,
    main: colors.common.white
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 10),
    prof: {
      weapons: [],
      savingThrows: [],
      skills: []
    }
  }
}

export const shadowborne = {
  name: "Shadowborne",
  aspect: "Dusk",
  icon: Shadowborne,
  affinity: "Darkness",
  colors: {
    main: colors.common.black
  },
  termDesc: "The most inroverted of the bunch",
  archetypes: ["Marksman", "Assassin"],
  game: {
    hitDice: dice(1, 8),
    prof: {
      weapons: ["Automatic rifles", "precision", "simple melee", "sidearms"],
      savingThrows: ["dex", "int"],
      skills: {
        choices: 2,
        starting: "Stealth",
        pool: ["Acrobatics", "Insight", "Investigation", "Perception", "Sleight of Hand"]
      }
    },
  }
}

export const maelstrom = {
  name: "Maelstrom",
  icon: null,
  affinity: "Cold",
  colors: {
    main: colors.blue
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 8)
  }
}

export const golem = {
  name: "Golem",
  icon: null,
  affinity: "Nature",
  colors: {
    main: colors.green
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 12)
  }
}

export const tempest = {
  name: "Tempest",
  icon: null,
  affinity: "Sky",
  colors: {
    main: colors.lightBlue
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 8)
  }
}

export const salamander = {
  name: "Salamander",
  icon: null,
  affinity: "Fire",
  colors: {
    main: colors.red
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 10)
  }
}

export default [aurora, golem, maelstrom, salamander, shadowborne, tempest]
