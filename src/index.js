var fbApp = firebase.initializeApp({
	apiKey: "AIzaSyCMl7W3dXcCCBRvMP2-jLhQ7gB7OG04n1k",
	authDomain: "quizmonkey-a798f.firebaseapp.com",
	databaseURL: "https://quizmonkey-a798f.firebaseio.com",
	storageBucket: "quizmonkey-a798f.appspot.com",
	messagingSenderId: "399897194069"
})

var m = require("./mithril")
var G = require('./components/G')
var Auth = require('./components/Auth')
var App = require('./components/App')

// if authenticated, show the app, otherwise show the auth screen

var Fork = {
	view: function () {
		// return m(G.user ? App : Auth)
		return m(App)
	}
}
// TODO: func
firebase.auth().onAuthStateChanged(function(user) {
	G.user = user
	m.mount(document.body, Fork)
})


