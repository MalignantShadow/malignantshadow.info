import React from 'react'
import { Route } from 'react-router-dom'

export const resolve = (parent, path) => !parent || path.startsWith("/") ? path : `${parent}${parent.endsWith("/") ? "" : "/"}${path}`

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

export const useRoutes = (routing, pageInfo) => {
  if(!routing || routing.length === 0) return []
  const routes = []
  routing.forEach((e, i) => {
    if (typeof e !== "object") return

    const { path, page, exact, children } = e
    let resolvedPage = pageInfo[page]
    if(typeof resolvedPage === "object") resolvedPage = resolvedPage.page
    routes.push(<Route
      key={i}
      path={path}
      exact={exact}
      component={resolvedPage}
    />)
    if (children && children.length)
      routes.concat(useRoutes(children, pageInfo[page]))

  })
  return routes
}

export const makeRoutes = (info, parent = "/") => {
  const routes = []
  for(let r of info) {
    if(typeof r !== "object") {
      routes.push(r)
      continue
    }

    const { title, slug, path, children, page, ...other } = r
    const resolvedSlug = slug || title.toLowerCase().replace(/\s+/, "-")
    const resolvedPath = resolve(parent, typeof path !== "string" ? resolvedSlug : path)
    const route = {title, path: resolvedPath, page: typeof page !== "string" ? resolvedSlug : page, ...other}
    if(children && children.length) route.children = makeRoutes(children, resolvedPath)
    routes.push(route)
  }
  return routes
}