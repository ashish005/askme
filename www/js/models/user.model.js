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
      setUserInfo: function (info) {
        userInfo = info;
      },

      getUserName: function () {
        return userInfo.userName;
      }
    };
  }
})();

