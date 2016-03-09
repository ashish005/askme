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
        return response.data;
      });
/*
      var defer = $q.defer();
      defer.resolve([
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        },
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        }
      ]);
      return defer.promise;*/
    }

    function getAnsweredQuestions() {
      return $http({
        url: '/record',
        method: 'get'
      }).then(function (response) {
        return response.data;
      });


      var defer = $q.defer();
      defer.resolve([
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        },
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        }
      ]);
      return defer.promise;
    }

    function getFavouriteQuestions() {
      var defer = $q.defer();
      defer.resolve([
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        },
        {
          "_id": "56e000469403e3382b610b4b",
          "userId": "ashi",
          "userName": "Ashish Chaturvedi",
          "presidentId": "hari",
          "presidentName": "Harish Tejwani",
          "form": {"type": "issue", "topic": "what", "subject": "sub", "comment": "comment"},
          "answer": "I am answering for the question",
          "isAnswered": true,
          "createdDate": "2016-03-09T10:51:43.951Z",
          "updatedDate": "2016-03-09T10:51:43.951Z",
          "likeCount": 20
        }
      ]);
      return defer.promise;
    }
  }
})();

