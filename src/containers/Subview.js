/**
 * # Subview.js
 *
 *  This is called from main to demonstrate the back button
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
 * Router
 */
import {Actions} from 'react-native-router-flux'

/**
 * Navigation Bar
 */
import NavigationBar from 'react-native-navbar'

/**
 * The necessary components from React
 */
import React from 'react'
import
{
  StyleSheet,
  View,
  Text,
  ListView
}
from 'react-native'

/**
 * Use device options so we can reference the Version
 *
 */
import * as deviceActions from '../reducers/device/deviceActions'

import Row from '../components/Row'


/**
* ## Redux boilerplate
*/

/**
 *  Instead of including all app states via ...state
 *  You probably want to explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version
  }
};

/*
 * Bind all the actions in deviceActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(deviceActions, dispatch)
  }
}


/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

/**
 * ## Subview class
 */
class Subview extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    const data = [
      {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
    {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
    {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}},
  {name:{first:'Ricardo',last:'Garcia'},picture:{large:'http://graph.facebook.com/702360/picture'}}
]

    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Subview)
