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
    apiKey:"AIzaSyBjPJfRSD-hzx7rU6l4Fm4hhfaDd6IeruU",
    authDomain: "geosnap-21628.firebaseapp.com",
    databaseURL: "https://geosnap-21628.firebaseio.com",
    storageBucket: "geosnap-21628.appspot.com",
    messagingSenderId: "200552480479"
  }
}
