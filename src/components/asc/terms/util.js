export const styleTerm = (color, other, key = "term") => ({
  [key]: {
    color: color.main,
    borderColor: color.main,
    ...other
  }
})

export const styleCategory = (color, other, key = "category") => ({
  [key]: {
    backgroundColor: color.main,
    borderColor: color.light,
    ...other
  },
})
