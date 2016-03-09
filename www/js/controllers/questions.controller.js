(function () {
  'use strict';

  angular.module('app')
    .controller('QuestionsCtrl', QuestionsCtrl);

  QuestionsCtrl.$inject = ['$scope', '$state', 'QuestionService', 'AskMeService', 'User'];

  function QuestionsCtrl ($scope, $state, QuestionService, AskMeService, User) {
    var typeMap = {
      'all': 'getAllQuestions',
      'answered': 'getAnsweredQuestions',
      'liked': 'getFavouriteQuestions'
    };

    $scope.questions = [];

    var method = typeMap[$state.current.data.filter || 'all'];
    QuestionService[method]().then(function (items) {
      $scope.questions = items;
    });

    $scope.navigateToAsk = function () {
      $state.go('starter.askquestion');
    };

    $scope.canAnswer = User.isPresident();

    $scope.navigateToAnswer = function (question) {
      AskMeService.cacheQuestionInfo(question);
      $state.go('starter.answerQuestion');
    };

    $scope.doRefresh = function () {
      QuestionService[method]().then(function (items) {
        $scope.questions = items;
      }).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  }
})();

