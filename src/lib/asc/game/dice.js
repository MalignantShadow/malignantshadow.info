export default (amount = 1, die = 6, mod = 0) => Object.defineProperties({}, {
  amount: { value: amount, writable: true },
  die: { value: die, writable: true },
  mod: { value: mod, writable: true },
  avg: { get: function() { return this.amount * this.die / 2 + this.mod }},
  range: { get: function() { return [this.amount + this.mod, this.amount * this.die + this.mod] }},
  rangeString: {
    get: function() {
      const [min, max] = this.range
      return `${min} - ${max}`
    }
  },
  toString: function() {
    let string = `${this.amount}d${this.die}`
    return mod === 0 ? string : `${string} ${this.mod < 0 ? "-" : "+"} ${this.mod}`
  }
})