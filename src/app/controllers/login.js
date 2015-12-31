(function() {

    var LoginController = function($scope, $timeout, AuthService) {

        $scope.user = {};

        $scope.init = function() {
          console.log("Init");
        };

        $scope.login = function() {
            var credentials = {
                username: $scope.user.username,
                password: $scope.user.password
            };

            AuthService.login(credentials).then(function(response) {
                console.log(response);
            })
            .catch(function(response) {
                // Exeception
            });
        };

        $scope.$watch('user.username', function(newValue, oldValue) {
        
        });
   
        $scope.$watch('user.password', function(newValue, oldValue) {
            var e = document.getElementById("password")
            var $e = angular.element(e);
        });

        $scope.init();

    };

    angular.module('Mathematics').controller('LoginController', LoginController);

}());
