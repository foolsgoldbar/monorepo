const changelogGit = require('@changesets/changelog-git');

const getReleaseLine = async (
  changeset,
  _type
) => {
  return changeset.summary;
};

module.exports = { ...changelogGit, getReleaseLine }