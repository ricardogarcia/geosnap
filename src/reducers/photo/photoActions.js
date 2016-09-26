/**
 * # photoActions.js
 *
 * All the request actions have 3 variations, the request, a success
 * and a failure. They all follow the pattern that the request will
 * set the ```isFetching``` to true and the whether it's successful or
 * fails, setting it back to false.
 *
 */
'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const {
  PHOTO_TAKEN,
  PHOTO_SAVED
} = require('../../lib/constants').default

/**
 * Project requirements
 */
const BackendFactory = require('../../lib/BackendFactory').default

import {Actions} from 'react-native-router-flux'

const _ = require('underscore')

/**
 * ## State actions
 * controls which view is shown to the user as they take pictures
 */

export function photoTakenState () {
  return {
    type: PHOTO_TAKEN
  }
}

/**
 * ## Logout actions
 */
export function logoutRequest () {
  return {
    type: LOGOUT_REQUEST
  }
}

export function logoutSuccess () {
  return {
    type: LOGOUT_SUCCESS
  }
}
export function photoSaved () {
  return {
    type: PHOTO_SAVED,
    payload: true
  }
}

export function savePhoto (imageData,position) {
  return dispatch => {
    dispatch(photoSaved)
    return BackendFactory().savePhoto({
      imageData: imageData,
      position: position
    })
  }
}
