(function () {
  'use strict';

  angular.module('app')
    .factory('User', User);

  User.$inject = [];

  function User() {
    var userInfo = {
      "userId":null,
      "name":null,
      "email":null,
      "mobile":null,
      "createdDate":null,
      "role":0
    };
    return {
      setUserInfo: function (info) {
        debugger;
        userInfo = info;
      },

      getUserName: function () {
        return userInfo.name;
      },
      getUserId: function () {
        return userInfo.userId;
      }
    };
  }
})();

