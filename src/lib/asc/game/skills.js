const s = (name, desc, aptitude, examples) => ({name, desc, aptitude, examples})

export const athletics = s("Athletics", "Pertains to situations that require physical strength and endurance.", "Strength", "Running, climbing, long jumping")

const skills = [{
  name: "Athletics",
  desc: "Pertains to situations that require physical strength and endurance.",
  aptitude: "Strength",
  examples: "Running, climbing, long jumping"
}, {
  name: "Acrobatics",
  desc: "Pertains to situations that require balance or precision.",
  aptitude: "Dexterity",
  examples: "Stunts (flips, dives, rolls), walking across a slippery surface.",
}, {
  name: "Animal Handling",
  desc: "Pertains to situations involving animals.",
  aptitude: "Wisdom",
  examples: "Taming an animal, training a pet, warding off a predator."
}, {
  name: "Deception",
  desc: "Pertains to deception of an adversary through trickery or wordplay.",
  aptitude: "Charisma",
  examples: "Lying (by omission or blatancy), deceiving word usage."
}, {
  name: "Driving",
  desc: "Pertains to driving a vehicle and performing a potentially dangerous or advanced maneuver.",
  aptitude: "Dexterity",
  examples: "Drifting around a corner, performing a successful PIT maneuver, performing a stunt."
}, {
  name: "Engineering",
  desc: "Pertains to attempting to fix or alter a piece of equipment or hardware.",
  aptitude: "Intelligence",
  examples: "Repairing a broken down vehicle, modifying or improvising a weapon",
  tool: "Engineering Tools"
}, {
  name: "Hacking",
  desc: "Pertains to attempting to alter, block, or intercept electronic signals.",
  aptitude: "Intelligence",
  examples: "Hacking an electronically locked door, altering an electronic display",
  tool: "Hacking Tools"
}, {
  name: "History",
  desc: "Pertains to recalling information about the history of Ecumene.",
  aptitude: "Intelligence",
  examples: "Recalling the name of a war hero, recalling historical information about a city, recalling a historical battle."
}, {
  name: "Insight",
  desc: "Pertains to the analyzation of a character or creature's voice or body language to gain insight on their thoughts and feelings.",
  aptitude: "Wisdom",
  examples: "Trying to deduce if a character is lying, perceiving hoe a character feels about a piece information that was just shared."
}, {
  name: "Intimidation",
  desc: "Pertains to the intimidation or scaring of other characters.",
  aptitude: "Charisma",
  examples: "Announcing an ultimatum, yelling, showing a large display of aggression"
}, {
  name: "Investigation",
  desc: "Pertains to searching areas through the use of active searching for specific information.",
  aptitude: "Intelligence",
  examples: "Searching a city for a good restaurant, checking for traps, asking townspeople for the location of another character."
}, {
  name: "Medicine",
  desc: "Pertains to situations requiring medical knowledge.",
  aptitude: "Wisdom",
  examples: "Applying first aid, identifying a drug"
}, {
  name: "Nature",
  desc: "Pertains to the identification and information of fauna and flora in Ecumene.",
  aptitude: "Intelligence",
  examples: "Identifying animal tracks, identifying a plant, deducing whether a plant poisonous."
}, {
  name: "Perception",
  desc: "Pertains to the perception of information pertaining to the senses of touch, smell, sight, hearing, and taste.",
  aptitude: "Wisdom",
  examples: "Watching a crowd for anyone suspicious, eavesdropping on a conversation."
}, {
  name: "Performance",
  desc: "Pertains to the performance of a character when they play an instrument, create an art piece, or another action considered a 'performance.'",
  aptitude: "Charisma",
  examples: "Playing a role in a play, playing an instrument, dancing, painting"
}, {
  name: "Persuasion",
  desc: "Pertains to the persuasion of a character to be sympathetic towards another character's view or cause, typically by providing a benefit.",
  aptitude: "Charisma",
  examples: "Convincing an enemy to lay down their arms, "
}, {
  name: "Sleight of Hand",
  desc: "Pertains to the quick and precise movements of a character's hands and fingers to accomplish a task.",
  aptitude: "Dexterity",
  examples: "Pickpocketing, cheating in a card game, juggling"
}, {
  name: "Stealth",
  desc: "Pertains to movement and actions done in such a way as to not rise suspicion.",
  aptitude: "Dexterity",
  examples: "Hiding, sneaking, moving without being seen"
}, {
  name: "Survival",
  desc: "Wisdom",
  aptitude: "Wisdom",
  examples: "Tracking a group using tracks that may not be clearly visible, recalling information about improvised shelter."
}]

export default skills
export const byAptitude = skills.reduce((acc, obj) => {
  const apt = obj.aptitude
  if(!acc[apt]) acc[apt] = []
  acc[apt].push(obj)
  return acc
}, {})
