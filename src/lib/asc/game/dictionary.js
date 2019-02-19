const t = (name, desc, other) => ({name, desc, ...other})

export default {
  gm: t("GM", "Game Master"),
  advantage: t("Advantage", "Roll two d20s and choose the higher result"),
  disadvantage: t("Disdvantage", "Roll two d20s and choose the lower result")
}
