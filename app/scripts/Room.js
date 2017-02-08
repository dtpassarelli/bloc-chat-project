(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
  	var rooms = $firebaseArray(ref);
    debugger;

    var createRoom = function(name) {

      rooms.$add(room);

    }

    return {
      all: rooms,
      create: createRoom
    };
  }

  angular
    .module('BlocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();