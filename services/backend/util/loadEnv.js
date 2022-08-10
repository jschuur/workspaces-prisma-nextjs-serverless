const dotenv = require('dotenv-flow');

const DOTENV_PATH = '../..';

module.exports = async ({ options: { stage } }) => {
  const envVars = dotenv.config({
    path: DOTENV_PATH,
    node_env: stage,
    default_node_env: 'local',
  }).parsed;

  if (envVars) {
    console.log(`Loading environment variables:`);

    Object.keys(envVars).forEach((key) => console.log(`  - ${key}`));
  }

  return envVars || {};
};
