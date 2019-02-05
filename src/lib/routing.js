export const resolve = (parent, path) => !parent || path.startsWith("/") ? path : `${parent}/${path}`

export const getTitle = (routing, path, parent) => {
  for(let r of routing) {
    if(typeof r !== "object") continue
    if(r.children) {
      const potential = getTitle(r.children, path, resolve(parent, r.path))
      if(potential) return potential
    } else if(path === resolve(parent, r.path)) return r.title
  }
  return "Title?"
}