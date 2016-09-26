/**
 * # globalInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
/**
 * ## Import
 */
import {Record} from 'immutable'
/**
 * ## InitialState
 *
 * * currentPhoto - photo data from the latest picture taken
 */
var InitialState = Record({
  currentPhoto: null
})
export default InitialState
