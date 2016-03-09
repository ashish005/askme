(function () {
  'use strict';

  angular.module('app')
    .controller('QuestionsCtrl', QuestionsCtrl);

  QuestionsCtrl.$inject = ['$scope', '$state', 'QuestionService'];

  function QuestionsCtrl ($scope, $state, QuestionService) {
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
  }
})();

