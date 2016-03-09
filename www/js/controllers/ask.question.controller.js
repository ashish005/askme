(function () {
    'use strict';

    angular.module('app')
        .controller('AskQuestionCtrl', AskQuestionCtrl);

    AskQuestionCtrl.$inject = ['$scope', '$state', 'AskMeService', 'User'];

    function AskQuestionCtrl ($scope, $state, AskMeService, User) {
        $scope.presidents = [
            {
                id: 1,
                name: ''
            },
            {
                id: 2,
                name: ''
            }
        ];

        $scope.askMeInfo = {
            presidentId: '',
            userId: '',
            userName: '',
            presidentName: '',
            form: {
                type: '',
                topic: '',
                subject: '',
                comment: ''
            }
        };

        $scope.ask = function () {
            AskMeService.ask($scope.askMeInfo).then(function () {
                $state.go('questions.all');
            });
        };
    }
})();

