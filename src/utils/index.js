const batch = require('./batch');
const fixUtf8Stream = require('./fixUtf8Stream');
const fold = require('./fold');
const lines = require('./lines');
const readableFrom = require('./readableFrom');
const reduce = require('./reduce');
const reduceStream = require('./reduceStream');
const scan = require('./scan');
const skip = require('./skip');
const skipWhile = require('./skipWhile');
const take = require('./take');
const takeWhile = require('./takeWhile');
const takeWithSkip = require('./takeWithSkip');

module.exports = {
  ...batch,
  ...fixUtf8Stream,
  ...fold,
  ...lines,
  ...readableFrom,
  ...reduce,
  ...reduceStream,
  ...scan,
  ...skip,
  ...skipWhile,
  ...take,
  ...takeWhile,
  ...takeWithSkip,
};
