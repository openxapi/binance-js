// Export individual modules as properties
import * as cmfutures from './cmfutures';
import * as futuresdata from './futuresdata';
import * as options from './options';
import * as pmargin from './pmargin';
import * as pmarginpro from './pmarginpro';
import * as umfutures from './umfutures';

// Export all modules as a single object with named properties
export default {
  cmfutures,
  futuresdata,
  options,
  pmargin,
  pmarginpro,
  umfutures,
};

// Also export each module individually for flexibility
export {
  cmfutures,
  futuresdata,
  options,
  pmargin,
  pmarginpro,
  umfutures,
};
