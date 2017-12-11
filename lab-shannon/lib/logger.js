'use strict';

const winston = require(`winston`);
const winstonLevels = {error: 0, warning: 1, info: 2, verbose: 3, debug: 4};

const logger = new (winstonLogger)({
  transports: [
    new (winston.transports.File)({
      filename: 'log.json',
      levels: winstonLevels,
      level: 0,
    }),
  ],
});
