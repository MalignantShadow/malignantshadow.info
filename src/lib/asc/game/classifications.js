import * as colors from '@material-ui/core/colors'
import dice from './dice'

//import icons

export const aurora = {
  name: "Aurora",
  icon: null,
  affinity: "Light",
  colors: {
    text: colors.grey,
    main: colors.common.white
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 10)
  }
}

export const shadowborne = {
  name: "Shadowborne",
  icon: null,
  affinity: "Darkness",
  colors: {
    main: colors.common.black
  },
  termDesc: "",
  game: {
    hitDice: dice(1, 8)
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