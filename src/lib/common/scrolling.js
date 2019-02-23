export const interpolate = (t) => {
  const i = 1 - (--t) * t * t * t
  return i
}

const doc = document.documentElement
let docHeight = 0

// how long the scroll should last
let _timeout = 0

// when the scroll started
let _startTime = 0

// where the scroll start
let _scrollTopStart = 0

// where the scroll the should end
let _scrollTopEnd = 0

// the scroll position of the last frame
let _lastScrollTop = 0

// the difference (start - end)
// also denotes direction
let _diff = 0

// the requestAnimationFrame pointer
let _raf = null

let _interpolationFn = (t) => t

// ignore scroll not moving if it is the first frame
let _firstFrame = true


const clamp = (min, max, val) => Math.min(Math.max(min, val), max)

// Cancel the currently animating scroll
const cancel = () => {
  if (_raf) cancelAnimationFrame(_raf)
  _raf = null
}

const scroll = () => {
  const now = Date.now().valueOf()
  const normalStart = now - _startTime

  // start / timeout = percentage of time
  const t = normalStart / _timeout

  // * _diff = how far the scroll should be right now
  const newScrollTop = _scrollTopStart + _diff * (_interpolationFn(t))

  // Clamp so we get exactly where we need to
  // If we are moving up, then the min is the target
  // If we are moving down, then the max is the target
  const clampedScrollTop = _diff < 0 ? clamp(_scrollTopEnd, docHeight, newScrollTop) : clamp(_scrollTopStart, _scrollTopEnd, newScrollTop)

  doc.scrollTop = clampedScrollTop

  // Bail if the timeout was reach, we reached our location, or the document didn't scroll
  if (t >= 1 || clampedScrollTop === _scrollTopEnd || (!_firstFrame && _lastScrollTop === clampedScrollTop)) {
    cancel()
    return
  }

  _lastScrollTop = newScrollTop
  if (_firstFrame) _firstFrame = false
  _raf = requestAnimationFrame(scroll)
}

export const scrollTo = (y, timeout, interpolation = interpolate) => {
  cancel()
  docHeight = doc.getBoundingClientRect().height
  _startTime = Date.now().valueOf()
  _scrollTopStart = doc.scrollTop
  _lastScrollTop = _scrollTopStart
  _scrollTopEnd = y
  _diff = y - doc.scrollTop
  _timeout = timeout
  _firstFrame = true
  _interpolationFn = interpolate
  _raf = requestAnimationFrame(scroll)
}
