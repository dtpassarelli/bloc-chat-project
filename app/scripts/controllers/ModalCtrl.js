(function() {
    function ModalCtrl($firebaseArray) {

    	var open = function(){

    	};

    	//  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
		$scope.close = function() {
 	 		close({
    			name: $scope.name,
    			age: $scope.age
    		}, 500); // close, but give 500ms for bootstrap to animate
		};

    	var submit = function(){

    	};
      
    }
 
     angular
         .module('BlocChat')
         .controller('ModalCtrl', [ "ui-bootstrap", ModalCtrl]);
 })();