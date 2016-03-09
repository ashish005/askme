(function () {
    'use strict';

    angular.module('app')
        .service('AuthService', AuthService);

    AuthService.$inject = ['User', '$http'];

    function AuthService(User, $http) {
        this.authenticate = function (userInfo) {
            return $http({
                url: '/login',
                data: userInfo,
                method: 'post'
            }).then(function (response) {
                var authResponse = response.data;
                User.setUserInfo(authResponse.data);
                if (authResponse.isSuccess) {
                    return true;
                } else {
                    throw new Error(authResponse.message);
                }
            });
        };
    }
})();

