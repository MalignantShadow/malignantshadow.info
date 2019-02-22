const t = (name, desc, other) => ({name, desc, ...other})

const damage = (noun, adj, doubled) => (args, variant) => {
  const is = doubled ? "doubled" : "halved"
  const dmg = args[0][0].toUpperCase() + args[0].substring(1)
  if(variant === "adj")
    return t(`${adj} to ${dmg} damage`, `${dmg} damage is ${is}`)
  return t(noun, `Damage is ${is}`)
}

export default {
  gm: t("GM", "Game Master"),
  advantage: t("Advantage", "Roll two d20s and choose the higher result"),
  disadvantage: t("Disdvantage", "Roll two d20s and choose the lower result"),
  dc: t("DC", "Difficulty Class"),
  resistance: damage("Resistance", "Resistant", false),
  vulnerability: damage("Vulnerability", "Vulnerable", true),
}
