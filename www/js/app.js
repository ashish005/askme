// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('starter', {
        abstract: true,
        templateUrl: 'templates/simple.layout.html'
      })

      .state('starter.authentication', {
        url: '/auth',
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl'
      })

      // setup an abstract state for the tabs directive
      .state('questions', {
        url: '/questions',
        abstract: true,
        templateUrl: 'templates/tab.layout.html'
      })

      // Each tab has its own nav history stack:

      .state('questions.all', {
        url: '/all',
        views: {
          'all': {
            templateUrl: 'templates/questions.html',
            controller: 'QuestionsCtrl'
          }
        },
        data: {
          filter: 'all'
        }
      })

      .state('questions.answered', {
        url: '/answered',
        views: {
          'answered': {
            templateUrl: 'templates/questions.html',
            controller: 'QuestionsCtrl'
          }
        },
        data: {
          filter: 'answered'
        }
      })

      .state('questions.liked', {
        url: '/liked',
        views: {
          'likes': {
            templateUrl: 'templates/questions.html',
            controller: 'QuestionsCtrl'
          }
        },
        data: {
          filter: 'liked'
        }
      })

      .state('starter.askquestion', {
        url: '/ask',
        templateUrl: 'templates/askme.html',
        controller: 'AskQuestionCtrl'
      })

      .state('starter.answerQuestion', {
        url: '/answer',
        templateUrl: 'templates/answer.html',
        controller: 'AnswerQuestionCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/auth');

  })

    .config(function($httpProvider) {
      $httpProvider.interceptors.push(function(Constants) {
        return {
          request: function(config) {
            if (!/.html/.test(config.url) && !/^http/.test(config.url)) {
              var separator = config.url.charAt(0) === '/' ? '' : '/';
              config.url = Constants.baseUrl + separator + config.url;
            }
            return config;
          }
        }
      });
    })

  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
      $ionicConfigProvider.views.maxCache(0);
  })

    .constant('Constants', {
        baseUrl: 'http://104.236.143.151:8080/rest-api/askme'
    });
