import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import MuiLink from '@material-ui/core/Link'

import { scrollTo } from '../../lib/common/scrolling'

// Custom link component that won't cause a re-render if the pathname is the same
// This should only be used on pages that don't rely on hash changes (which should be every page)
export default withRouter(({ href, children, history, location, match, params, staticContext, ...other }) => {
  const [path, hash] = href.split("#")
  const [locationFromProp, query = ""] = path.split("?")

  // Use the handler if the location and query is the same
  // We don't care if the hash is the same, cause the user could have scrolled
  const useHandler = (!locationFromProp || location.pathname === locationFromProp) && query === location.search

  function handleClick(e) {
    e.preventDefault()
    e.stopPropagation()

    let el
    const y = (!path && !hash) ? 0 : !(el = document.getElementById(hash)) ? -1 : window.scrollY + el.getBoundingClientRect().top
    if (y < 0) return

    window.history.pushState({}, "", `${location.pathname}${href}`)
    scrollTo(y)

  }

  return useHandler ?
    <MuiLink href={href} onClick={handleClick} {...other}>{children}</MuiLink> :
    <MuiLink component={Link} to={{ pathname: path || location.pathname, hash: hash || "", query: query || "", state: { prevLocation: location } }} {...other}>{children}</MuiLink>

})
