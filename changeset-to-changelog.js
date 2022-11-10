const changelogGit = require('@changesets/changelog-git');

const getReleaseLine = async (
  changeset,
  _type
) => {
  return changeset.summary + 'HEREREERRE';
};

module.exports = { ...changelogGit, getReleaseLine }