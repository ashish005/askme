(function () {
  'use strict';

  angular.module('app')
    .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['$scope', '$state', '$timeout', 'AuthService', 'User'];

  function AuthCtrl ($scope, $state, $timeout, AuthService, User) {
    $scope.loginInfo = {
      userName: '',
      password: ''
    };

    $scope.authenticate = function () {
      if('pge@123' == $scope.loginInfo['password']) {
        AuthService.authenticate({
          userId: $scope.loginInfo['userName'].toLowerCase(),
          password: $scope.loginInfo['password']
        }).then(function () {
          $state.go('questions.all');
        });
      }else{
        $scope.passError = "Incorrect UserID or Password!";
        $timeout(function(){
          $scope.passError = '';
        }, 2000);
      }
    };
  }
})();

