(function () {
  'use strict';

  angular.module('app')
    .factory('QuestionService', QuestionService);

  QuestionService.$inject = ['$q', '$http'];

  function QuestionService($q, $http) {
    return {
      getAllQuestions: getAllQuestions,
      getAnsweredQuestions: getAnsweredQuestions,
      getFavouriteQuestions: getFavouriteQuestions
    };

    function getAllQuestions() {
      return $http({
        url: '/record',
        method: 'get'
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

