(function () {
    'use strict';

    angular.module('app')
        .service('AskMeService', AskMeService);

    AskMeService.$inject = ['$http'];

    function AskMeService($http) {
        this.ask = function (askInfo) {
            return $http({
                url: '/record',
                data: askInfo,
                method: 'post'
            }).then(function(response) {
                return response.data;
            });
        };
    }
})();

