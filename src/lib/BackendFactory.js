/**
 * # BackendFactory
 *
 * This class sets up the backend by checking the config.js
 *
 */
'use strict'

import CONFIG from './config'
import Hapi from './Hapi'
import Firebase from './Firebase'

export default function BackendFactory (token = null) {
  if (CONFIG.backend.hapiLocal || CONFIG.backend.hapiRemote) {
    return new Hapi(token)
  }
  if (CONFIG.backend.firebase){
    return new Firebase(token)
  }
}
