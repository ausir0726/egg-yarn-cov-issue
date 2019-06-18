/* eslint valid-jsdoc: "off" */

'use strict';
// const Logger = require('egg-logger').Logger;
// const logger = new Logger();

// logger.disable('file');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560234291861_1656';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    logger: {
      dir: '/tmp/logs',
    },
    rundir: '/tmp/run',
  };

  return {
    ...config,
    ...userConfig,
  };
};
