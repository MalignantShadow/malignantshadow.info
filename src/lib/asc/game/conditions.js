const c = (name, desc) => ({ name, desc })

export const prone = c("Prone",  [
  "The unit's only movement option is to crawl or stand up. Standing up requires half movement and ends this condition.",
  "The unit has disadvantage on attack rolls",
  "Attack rolls against the unit have disadvantage. If the attacker is within 5 feet, the attack roll has advantage instead."
])

export default [
  prone
]
