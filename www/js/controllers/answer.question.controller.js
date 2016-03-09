(function () {
    'use strict';

    angular.module('app')
        .controller('AnswerQuestionCtrl', AnswerQuestionCtrl);

    AnswerQuestionCtrl.$inject = ['$scope', '$state', 'AskMeService', 'User'];

    function AnswerQuestionCtrl ($scope, $state, AskMeService, User) {

        $scope.answerInfo = AskMeService.getCachedQuestionInfo();

        $scope.answerInfo.answer = '';

        $scope.answer = function () {
            AskMeService.answer($scope.answerInfo).then(function () {
                $state.go('questions.all');
            });
        };

        $scope.goBack = function () {
            $state.go('questions.all');
        };
    }
})();

