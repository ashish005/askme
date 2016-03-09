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
    }
})();

