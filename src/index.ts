// Export individual modules as properties
import * as spot from './spot';
import * as margin from './margin';
import * as derivatives from './derivatives';
import * as wallet from './wallet';
import * as subaccount from './subaccount';
import * as convert from './convert';
import * as algo from './algo';
import * as copytrading from './copytrading';

// Export all modules as a single object with named properties
export default {
  spot,
  margin,
  derivatives,
  wallet,
  subaccount,
  convert,
  algo,
  copytrading,
};

// Also export each module individually for flexibility
export {
  spot,
  margin,
  derivatives,
  wallet,
  subaccount,
  convert,
  algo,
  copytrading,
};
