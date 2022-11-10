const changelogGit = require('@changesets/changelog-git');

const getReleaseLine = async (
  changeset,
  _type
) => {
  return changeset.summary + 'HEREREERRE';
};

module.exports = { getDependencyReleaseLine: changelogGit.getDependencyReleaseLine, getReleaseLine }