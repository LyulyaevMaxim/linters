const isCI = Boolean(process.env.CI)

module.exports = {
  isCI,
  fixable: isCI ? 'error' : 0,
  canBeFixedLater: isCI ? 'error' : 'warn',
}
