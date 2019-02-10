import React from 'react'
import { Route } from 'react-router-dom'

export const resolve = (parent, path) => !parent || path.startsWith("/") ? path : `${parent}/${path}`

export const getTitle = (routing, path, parent) => {
  if(!routing) return null
  for(let r of routing) {
    if(typeof r !== "object") continue
    if(r.children) {
      const potential = getTitle(r.children, path, resolve(parent, r.path))
      if(potential) return potential
    } else if(path === resolve(parent, r.path)) return r.title
  }
  return null
}

export const getRoutes = (routing, parent, pageInfo) => {
  if(!routing || routing.length === 0) return []
  const routes = []
  routing.forEach((e, i) => {
    if (e === "divider") return

    const { path, page, exact, children } = e
    if (children)
      routes.concat(getRoutes(children, path, pageInfo[page]))
    else
      routes.push(<Route
        key={i}
        path={resolve(parent, path)}
        exact={exact}
        component={pageInfo[page]}
      />)
  })
  return routes
}