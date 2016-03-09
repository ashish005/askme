(function () {
  'use strict';

  angular.module('app')
    .factory('User', User);

  User.$inject = [];

  function User() {
    var userInfo = {
      userId: null,
      role: null,
      isPresident: null,
      userName: null,
      authenticated: null
    };

    return {
      setUserId: function (userId) {
        userInfo.userId = userId;
      },

      isAuthenticated: function () {
        return userInfo.authenticated;
      },

      getUserRole: function () {
        return userInfo.role;
      },

      getUserName: function () {
        return userInfo.userName;
      }
    };
  }
})();

