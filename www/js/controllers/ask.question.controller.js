(function () {
    'use strict';

    angular.module('app')
        .controller('AskQuestionCtrl', AskQuestionCtrl);

    AskQuestionCtrl.$inject = ['$scope', '$state', 'AskMeService', 'User'];

    function AskQuestionCtrl ($scope, $state, AskMeService, User) {
        AskMeService.getPresident().then(function (response) {
            $scope.userFriends = response['users'];
            $scope.presidents = response['presidents'];
        });

        $scope.setPresident = function(){
            User.setAskMeModelPresidentInfo(this['president']);
        }

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
            AskMeService.ask($scope.askMeInfo.form).then(function () {
                $state.go('questions.all');
            });
        };

        $scope.goBack = function () {
            $state.go('questions.all');
        };
    }
})();

