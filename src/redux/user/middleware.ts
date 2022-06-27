import './subscribe';
import middlewareRegistry from '../middlewareRegistry';

import { LOGIN } from './types/actionType';

/**
 * Middleware to parse token data upon setting a new room URL.
 *
 * @param {Store} store - The redux store.
 * @private
 * @returns {Function}
 */
middlewareRegistry.register(store => next => action => {
  switch (action.type) {
    case LOGIN:
      console.log('🚀 ~ file: middleware.ts ~ line 12 ~ store', store);
      break;
  }

  return next(action);
});
