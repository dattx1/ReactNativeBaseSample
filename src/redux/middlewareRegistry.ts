/* @flow */
import type { Middleware } from 'redux';

/**
 * A registry for Redux middleware, allowing features to register their
 * middleware without needing to create additional inter-feature dependencies.
 */
class MiddlewareRegistry {
  _elements: Array<Middleware<any, any>>;

  /**
   * Creates a MiddlewareRegistry instance.
   */
  constructor() {
    /**
     * The set of registered middleware.
     *
     * @private
     * @type {Middleware[]}
     */
    this._elements = [];
  }

  /**
   * Adds a middleware to the registry.
   *
   * The method is to be invoked only before {@link #applyMiddleware()}.
   *
   * @param {Middleware} middleware - A Redux middleware.
   * @returns {void}
   */
  register(middleware: Middleware<any, any>) {
    this._elements.push(middleware);
  }

  getAllMiddleware() {
    return this._elements;
  }
}

/**
 * The public singleton instance of the MiddlewareRegistry class.
 */
export default new MiddlewareRegistry();
