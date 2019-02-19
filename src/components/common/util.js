const getStyles = (transformed) => {
  const { xs, sm } = transformed
  delete transformed.xs
  delete transformed.sm
  return [ transformed, xs, sm ]
}

export const appbarRelativeStyles = (theme, transform) => {
  const [styles1, xsOnly] = getStyles(transform(48))
  const [styles2, , smOnly] = getStyles(transform(64))

  return {
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      ...styles1,
      ...xsOnly
    },
    [theme.breakpoints.up('sm')]: {
      ...styles2,
      ...smOnly
    },
  }
}
