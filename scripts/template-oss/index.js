module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci.yml',
      '.github/workflows/publish.yml': 'publish.yml',
      '.github/CODEOWNERS': false,
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
      '.github/settings.yml': false,
    },
  },
  rootModule: {
    add: {
      'package.json': {file: 'pkg.json', overwrite: false},
      '.eslintrc.js': false,
      'CODE_OF_CONDUCT.md': false,
      'CONTRIBUTING.md': false,
    },
  },
  workspaceRepo: {
    add: {
      '.github/settings.yml': false,
    },
  },
  workspaceModule: {
    add: {
      'package.json': {file: 'pkg.json', overwrite: false},
      '.eslintrc.js': false,
    },
  },
  ciVersions: 'latest',
  latestCiVersion: 18,
  macCI: false,
  windowsCI: false,
  lockfile: true,
  allowedPackages: ['eslint', 'eslint-plugin-import'],
  requiredPackages: {
    devDependencies: [],
  },
  allowPaths: [
    '/.reuse/',
    '/src/',
    '/static/',
    '/content/',
    '/content-debug/',
    '/LICENSE*',
    '/gatsby-*.js',
    '/CODE_OF_CONDUCT.md',
    '/CONTRIBUTING.md',
    '/CONTENT-MODEL.md',
    '/.nvmrc',
    '/.prettierignore',
    '/.prettierrc.js',
  ],
}
