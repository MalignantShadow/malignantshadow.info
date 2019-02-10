export default [{
  title: "Ascension: Tabletop",
  listTitle: "Home",
  path: "/",
  exact: true,
  page: "home"
}, {
  title: "Rules",
  path: "/rules",
  page: "rules",
  children: [{
    title: "Aptitude Scores",
    path: "aptitude-scores",
    page: "aptitudeScores"
  }, {
    title: "Combat",
    path: "combat",
    page: "combat"
  }, {
    title: "Social",
    path: "social",
    page: "social"
  }]
}, {
  title: "Reference",
  path: "/ref",
  page: "ref",
  children: [{
    title: "Abilities",
    path: "abilities",
    page: "abilities"
  },{
    title: "Classifications",
    path: "classifications",
    page: "classifications"
  }, {
    title: "Feats",
    path: "feats",
    page: "feats"
  }]
}, {
  title: "Tools",
  path: "/tools",
  page: "tools",
  children: [{
    title: "Create a Character",
    path: "create-a-character",
    page: "createCharacter"
  }, {
    title: "Interactive Map",
    path: "map",
    page: "map"
  }]
}]