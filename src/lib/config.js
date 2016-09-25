module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: false,
    hapiLocal: false,
    firebase:true
  },
  HAPI: {
    local: {
      url: 'http://192.168.0.13:5000'
    },
    remote: {
      url: 'https://geosnapserver-bartonhammond.rhcloud.com/'
    }
  },
  FIREBASE: {
    apiKey:"",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  }
}
