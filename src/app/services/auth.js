(function() {

  var AuthService = function($http) {

      this.login = function(credentials) {
          return $http({
              method: 'POST',
              url: '/api/login',
              data: credentials
          });
      };

  };

  angular.module('Mathematics').service('AuthService', AuthService);

}());
