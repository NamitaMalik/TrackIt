/**
 * Created by namita on 9/9/15.
 */


angular.module('trackIt').controller('TaskListCtrl',['$scope','$meteor',function($scope,$meteor){

    $scope.tasks = $meteor.collection(Tasks);

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
        console.log(datediff);
        return Number(datediff / (24 * 60 * 60 * 1000))+1;
    }

    $scope.removeTask = function(index){
        $scope.tasks.splice(index,1);
    }


}]);