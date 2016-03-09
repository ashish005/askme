(function () {
    'use strict';

    angular.module('app')
        .service('AskMeService', AskMeService);

    AskMeService.$inject = ['$http', 'User'];

    function AskMeService($http, User) {
        this.ask = function (askInfo) {
            var model = User.getAskMeModel();
            model.form = askInfo;
            return $http({
                url: '/record',
                data: model,
                method: 'post'
            }).then(function(response) {
                return response.data;
            });
        };
        this.getPresident = function () {
            return $http({
                url: '/users',
                params: { userId:User.getUserId() },
                method: 'get'
            }).then(function(response) {
                return response.data;
            });
        };

        this.answer = function (answerInfo) {
            return $http({
                url: '/record',
                data: answerInfo,
                method: 'post'
            }).then(function(response) {
                return response.data;
            });
        };

        var questionInfo;
        this.cacheQuestionInfo = function (question) {
            questionInfo = question;
        };

        this.getCachedQuestionInfo = function () {
            var retVal = questionInfo;
            questionInfo = {};
            return retVal;
        }
    }
})();

