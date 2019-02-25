import { makeRoutes } from "../routing"

export default makeRoutes([{
  title: "Ascension: Tabletop",
  listTitle: "Home",
  path: "",
  exact: true,
  page: "home"
}, {
  title: "Rules",
  children: [{
    title: "Aptitude Scores",
    page: "aptitudeScores"
  }, {
    title: "Combat"
  }, {
    title: "Social"
  }]
}, {
  title: "Reference",
  slug: "ref",
  children: [{
    title: "Abilities"
  }, {
    title: "Skills"
  }, {
    title: "Conditions"
  }, {
    title: "Classifications",
    children: [
      { title: "ClassificationPage", page: "byId", path: ":id" }
    ]
  }, {
    title: "Feats"
  }]
}, {
  title: "Tools",
  children: [{
    title: "Create a Character",
    path: "create-a-character",
    page: "createCharacter"
  }, {
    title: "Interactive Map",
    slug: "map"
  }]
}])
