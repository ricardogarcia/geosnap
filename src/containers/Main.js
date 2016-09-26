/**
 * # Main.js
 *  This is the main app screen
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as authActions from '../reducers/auth/authActions'
import * as photoActions from '../reducers/photo/photoActions'
import * as globalActions from '../reducers/global/globalActions'

/**
 * Router
 */
import {Actions} from 'react-native-router-flux'

/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header'

/**
 * The components needed from React
 */
import React, {Component} from 'react'
import
{
  StyleSheet,
  View,
  Dimensions,
  Text
}
from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Camera from 'react-native-camera';

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

/**
 *  Instead of including all app states via ...state
 *  One could explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps (state) {
  return {
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
};

/*
 * Bind all the actions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...globalActions,...photoActions }, dispatch)
  }
}

var styles = StyleSheet.create({
  container: {
    //flexDirection: 'column',
    flex: 1
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#7ec0ee',
    borderColor: '#7ec0ee',
    marginLeft: 10,
    marginRight: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    color: '#000',
    padding: 0,
    margin: 80,
    color:'#1ec0ee'
  }
})
/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

/**
 * ## App class
 */
class Main extends Component {

  handlePress () {
    Actions.Subview({
      title: 'Subview'
      // you can add additional props to be passed to Subview here...
    })
  }

  takePicture() {
    var self = this;
    navigator.geolocation.getCurrentPosition(function(position){
      console.log('Your current position is:');
      console.log('Latitude : ' + position.coords.latitude);
      console.log('Longitude: ' + position.coords.longitude);
      console.log('More or less ' + position.coords.accuracy + ' meters.');
      const options = {metadata:position}
      this.camera.capture(options)
        .then((data) => {
          //console.log(data)
          self.props.actions.savePhoto(data.data,position);
        })
        .catch(err => console.error(err));
    }.bind(this))

  }

  render () {
    var color = this.props.selected ? '#1ec0ee' : '#000000'
    const cameraIconName = 'circle-thin';
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
          captureTarget={Camera.constants.CaptureTarget.memory}
          captureQuality={Camera.constants.CaptureQuality.low}
          >
          <View style={{flex: 0, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
            <Icon style={styles.capture} onPress={this.takePicture.bind(this)} name={cameraIconName} size={80} />
          </View>
        </Camera>
      </View>
    )
  }
};

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Main)
