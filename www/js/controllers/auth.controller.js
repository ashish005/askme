(function () {
  'use strict';

  angular.module('app')
    .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['$scope', '$state', 'AuthService', 'User'];

  function AuthCtrl ($scope, $state, AuthService, User) {
    $scope.loginInfo = {
      userName: '',
      password: ''
    };

    $scope.authenticate = function () {
      AuthService.authenticate({ userId:$scope.loginInfo['userName'], password:$scope.loginInfo['password']}).then(function () {
        $state.go('questions.all');
      });
    };
  }
})();

