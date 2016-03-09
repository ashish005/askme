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
    var askMeModelData = {
      askmeId:'',
      userId:null,
      userName:null,
      presidentId:null,
      presidentName:null,
      form:{}
    };
    return {
      setUserInfo: function (info) {
        userInfo = info;
        askMeModelData['userId'] = info['userId'];
        askMeModelData['userName'] = info['name'];
      },

      getUserName: function () {
        return userInfo.name;
      },
      getUserId: function () {
        return userInfo.userId;
      },
      setAskMeModelPresidentInfo : function(data){
        askMeModelData['presidentId'] = data['userId'];
        askMeModelData['presidentName'] = data['name'];
      },
      getAskMeModel:function(){
        return askMeModelData;
      },

      isPresident: function () {
        return userInfo.role == 1;
      }
    };
  }
})();

