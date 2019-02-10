
// import pages

export default [{
  title: "Ascension: Tabletop",
  listTitle: "Home",
  path: "/",
  exact: true
}, {
  title: "Rules",
  path: "/rules",
  children: [{
    title: "Aptitude Scores",
    path: "aptitude-scores",
    component: () => null
  }, {
    title: "Combat",
    path: "combat",
    component: () => null
  }, {
    title: "Social",
    path: "social",
    component: () => null
  }]
}, {
  title: "Reference",
  path: "/ref",
  children: [{
    title: "Abilities",
    path: "abilities",
    component: () => null
  },{
    title: "Classifications",
    path: "classifications",
    component: () => null
  }, {
    title: "Feats",
    path: "feats",
    component: () => null
  }]
}, {
  title: "Tools",
  path: "/tools",
  children: [{
    title: "Create a Character",
    path: "create-a-character",
    component: () => null
  }, {
    title: "Interactive Map",
    path: "map",
    component: () => null
  }]
}]