require('dotenv').config();
const resolveEnvVars = require('resolve-env-vars');
const { DefinePlugin } = require('webpack');

module.exports = (config, env, helpers) => {
  const { stringified, raw } = resolveEnvVars('PA_'); //PREACT_APP prefix
  config.plugins.push(new DefinePlugin(stringified));
  const { plugin: htmlPlugin } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (htmlPlugin) {
    htmlPlugin.options.env = raw;
  }
};