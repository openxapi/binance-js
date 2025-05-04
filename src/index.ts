// Export individual modules as properties
import * as spot from './spot';
import * as umfutures from './umfutures';
import * as cmfutures from './cmfutures';
import * as options from './options';
import * as pmargin from './pmargin';

// Export all modules as a single object with named properties
export default {
  spot,
  umfutures,
  cmfutures,
  options,
  pmargin,
};

// Also export each module individually for flexibility
export {
  spot,
  umfutures,
  cmfutures,
  options,
  pmargin,
};
