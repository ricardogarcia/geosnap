/**
 * # photoReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict'
/**
 * ## Imports
 *
 * InitialState
 */
import InitialState from './photoInitialState'

/**
 * Photo actions to test
 */
const {
  PHOTO_TAKEN,
  PHOTO_SAVED
} = require('../../lib/constants').default

const initialState = new InitialState()

/**
 * ## photoReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function deviceReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  switch (action.type) {

    /**
     * ### set the photo taken state
     *
     */
    case PHOTO_TAKEN:
      return state.set('photoTaken', true);

    /**
     * ### set the version in the state
     *
     */
    case PHOTO_SAVED:
      const photoSaved = action.payload
      return state.set('photoSaved', photoSaved)
  }

  return state
}
