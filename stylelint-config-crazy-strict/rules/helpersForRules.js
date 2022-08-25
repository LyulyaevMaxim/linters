const isCI = Boolean(process.env.CI)

module.exports = {
  isCI,
  fixable: { severity: 'warning' },
  uncritical: { severity: isCI ? 'error' : 'warning' },
  projectNamePattern: 'projectName-.+',
}
