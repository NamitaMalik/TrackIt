/**
 * Created by namita on 9/9/15.
 */


angular.module('trackIt').controller('TaskListCtrl',['$scope','$rootScope','$meteor',function($scope,$rootScope,$meteor){

    $scope.sort={name:1};
    $scope.orderProperty = '1';

    $scope.tasks = $meteor.collection(function() {
        return Tasks.find({}, {
            sort : $scope.getReactively('sort')
        });
    });
    $meteor.autorun($scope, function() {
        $meteor.subscribe('tasks', {
            sort: $scope.getReactively('sort')
        });
    });

    $scope.$watch('orderProperty', function(){
        if ($scope.orderProperty)
            $scope.sort = {name: parseInt($scope.orderProperty)};
    });
    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

    $scope.addTask = function(task){
        var startDate = task.startDate.split('/');
        var d = new Date(parseInt(startDate[2]),parseInt(startDate[1]) - 1,parseInt(startDate[0]));
        var estEndDate = task.estEndDate.split('/');
        var d1 = new Date(parseInt(estEndDate[2]),parseInt(estEndDate[1]) - 1,parseInt(estEndDate[0]));
        task.estEffort = DateDiff(d1, d);
        $scope.tasks.push(task);
        $scope.task = '';

    };

    console.log($scope.tasks);

    function DateDiff(date1, date2) {
        var datediff = date1.getTime() - date2.getTime();
        return Number(datediff / (24 * 60 * 60 * 1000))+1;
    }

    $scope.removeTask = function(index){
        $scope.tasks.splice(index,1);
    };

    $scope.updateEffort= function(task){
        var estEndDate = task.estEndDate.split('/');
        var d = new Date(parseInt(estEndDate[2]),parseInt(estEndDate[1]) - 1,parseInt(estEndDate[0]));
        var actEndDate = task.actEndDate.split('/');
        var d1 = new Date(parseInt(actEndDate[2]),parseInt(actEndDate[1]) - 1,parseInt(actEndDate[0]));
        task.deviation = DateDiff(d1, d)-1;
        if(isNaN(task.deviation)){
            task.deviation = 0;
        }
    }


}]);