const t = (name, desc, other) => ({ name, desc, ...other })

const capitalize = (str) => str[0].toUpperCase() + str.substring(1)

const damage = (noun, adj, doubled) => (args, variant) => {
  const is = doubled ? "doubled" : "halved"
  const dmg = variant === "adj" && args && args.length > 1
    ? args.map(e => capitalize(e)).slice(0, -1).join(", ") + ", and " + capitalize(args[args.length - 1])
    : args[0]
  if (variant === "adj")
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
