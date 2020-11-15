  var config = {
    apiKey: "AIzaSyD1vzShDemaz2zC4pVZnvMKk-u25TwU3BY",
    authDomain: "nodemcu-878e2.firebaseapp.com",
    databaseURL: "https://nodemcu-878e2.firebaseio.com",
    projectId: "nodemcu-878e2",
    storageBucket: "nodemcu-878e2.appspot.com",
    messagingSenderId: "274938119974"
  };
  firebase.initializeApp(config);

  var submain = document.getElementByid("submain")
  var submain2 = document.getElementByid("submain2")
  var submain3 = document.getElementByid("submain3")
  var submain4 = document.getElementByid("submain4")

  var firebaseref = firebase.database().ref();
  function submit() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("led1").set(1)
  }
  function submit2() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("led2").set(1)
  }
  function submitoff() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("led1").set(0)
  }
  function submit2off() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("led2").set(0)
  }
