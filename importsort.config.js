/**
 * Import Sort organizes imports with a consistant style.
 *
 * The configuration file must exist in the root of the project.
 * An issue was opened with the maintainer to determine the viability of
 * eventually allowing this file to be stored with other configuration files.
 *
 * Reference https://github.com/renke/import-sort/issues/121
 */
module.exports = {
  ".ts, .tsx": {
    parser: "typescript",
    style: "renke",
  },
};
