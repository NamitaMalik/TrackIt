/**
 * Created by namita on 9/9/15.
 */

angular.module('trackIt').config(['$urlRouterProvider','$stateProvider','$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('tasks',{
                url:'/tasks',
                views:{
                    '':{ templateUrl:'index.ng.html'},
                    'taskView': {
                        templateUrl: 'client/views/tasks/taskList.ng.html',
                        controller: 'TaskListCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise("/");

}]);
