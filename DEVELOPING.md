# Developing

## Setting up Development Environment

### Minimum Requirements

- Git
- Yarn
- Node.js
- Text Editor of your choice (Visual Studio Code Recommended)

### Recommended Requirements

- Docker
- CircleCI (Pro Tier Optional)
- DigitalOcean

## Workflow

### Making Changes

Code is written on working branches prefixed with one of the following titles:

- feature
- bugfix
- hotfix
- issue
- build

The branch name should be deliniated by a `/` and then should be named with a brief, but precise title describing the purpose of the branch.

Examples:

```
feature/add-timestamp-to-punch
bugfix/fix-text-wrapping-on-mobile
hotfix/fix-incorrect-value-sent-from-form
issue/33-change-icon-on-button
build/refactor-circleci-config
```

Working branches _MUST_ be forked from the `development` branch, the `staging` and `master` branches are production environments that are _ONLY_ interacted with via Pull Requests from the `development` branch.

Once a working branch is completed, a Pull Request should be opened to merge the changes into `development`. Please fill out the Pull Request Template provided from GitHub to ensure the changes in the branch are valid and ready for merging.

### Creating a New Release

When changes are ready to be sent to `staging` from `development`, a new branch should be made from the `development` branch with the prefix `release` followed by the version number of that release.

Example:

```
release/v5.5.10
```

Then the release branch should be merged back into `development` (this is so that future release branches will increment their version number correctly) and then a Pull Request should be made from `development` into `staging`. Once this PR is resolved, the `staging` branch will trigger a workflow in CircleCI which will run final validations and then trigger a deployment to the staging environment.

The new version should be manually tested in its staging environment by one or more developers. These tests should aim to stress test features and changes included in the new version as well as features that may have been affected by those changes to ensure that the entire application is working as intended.

Once the application is confirmed to be working as inteded, then a Pull Request should be made from `staging` to `master`. Once resolved, this PR will trigger a final workflow on CircleCI which will again run validation and then trigger a deployment to the production environment where real world users will have access to the application.

**Note:** Absolutely _NO_ changes should be made between the staging and production environments. If errors are discovered while the application is in the staging environment then changes should be made on the development branch, and filtered through the Release Branch workflow described above.
