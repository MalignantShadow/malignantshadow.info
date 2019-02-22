import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import MuiLink from '@material-ui/core/Link'

// Custom link component that won't cause a re-render if the pathname is the same
// This should only be used on pages that don't rely on hash changes (which should be every page)

export default withRouter(({href, children, history, location, match, params, staticContext, ...other}) => {
  const [path, hash] = href.split("#")
  const [locationFromProp, query = ""] = path.split("?")

  // Use the handler if the location and query is the same
  // We don't care if the hash is the same, cause the user could have scrolled
  const useHandler = (!locationFromProp || location.pathname === locationFromProp) && query === location.search

  function handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
    const el = document.querySelector(`#${hash}`)
    if(!el) return

    // Using window.history instead of history prop to prevent causing a rerender
    // This won't show in react-router's history prop, but I don't care about that
    window.history.pushState({}, "", `${location.pathname}${href}`)

    el.scrollIntoView({behavior: "smooth", block: "start"}) // 'block' is ignored in polyfill
  }

  return useHandler ?
  <MuiLink href={href} onClick={handleClick} {...other}>{children}</MuiLink> :
  <MuiLink component={Link} to={href} {...other}>{children}</MuiLink>


})
