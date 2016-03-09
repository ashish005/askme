(function () {
  'use strict';

  angular.module('app')
    .service('AuthService', AuthService);

  AuthService.$inject = ['User', '$http'];

  function AuthService(User, $http) {
    this.authenticate = function (userInfo) {
      return $http({
        url: '/api/authenticate',
        params: userInfo,
        method: 'post'
      }).then(function(response) {
        var authResponse = response.data;
        if (authResponse.success) {
          return true;
        } else {
          throw new Error('Authentication failed');
        }
      });
    };
  }
})();

