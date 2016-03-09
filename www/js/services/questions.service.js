(function () {
  'use strict';

  angular.module('app')
    .factory('QuestionService', QuestionService);

  QuestionService.$inject = ['$q', '$http', 'User'];

  function QuestionService($q, $http, user) {
    return {
      getAllQuestions: getAllQuestions,
      getAnsweredQuestions: getAnsweredQuestions,
      getFavouriteQuestions: getFavouriteQuestions
    };

    function getAllQuestions() {

      var _model = { userId: user.getUserId() };
      return $http({
        url: '/record',
        method: 'get',
        params: _model
      }).then(function (response) {
        return response.data.data;
      });
    }

    function getAnsweredQuestions() {
      return $http({
        url: '/record',
        method: 'get'
      }).then(function (response) {
        return response.data.data;
      });
    }

    function getFavouriteQuestions() {
      return $http({
        url: '/record',
        method: 'get'
      }).then(function (response) {
        return response.data.data;
      });
    }
  }
})();

