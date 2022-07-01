import './subscribe';
import { LOGIN } from './actionType';
import middlewareRegistry from '../middlewareRegistry';

/**
 * Middleware to parse token data upon setting a new room URL.
 *
 * @param {Store} store - The redux store.
 * @private
 * @returns {Function}
 */
middlewareRegistry.register(_store => next => action => {
  switch (action.type) {
    case LOGIN:
      break;
  }

  return next(action);
});
