var myApp = angular.module("myApp", []);

myApp.controller("formController", ["$scope", function($scope) {
    console.log("formController is a go");

    $scope.formContent = {};
    $scope.employeeArray = [];
    $scope.monthlySalary = 0;

    $scope.appendDom = function() {
        console.log("$scope.formContent from appendDom: ", $scope.formContent);

        $scope.formContent.employeeSalary = parseInt($scope.formContent.employeeSalary);
        $scope.monthlySalary += Math.round($scope.formContent.employeeSalary / 12);
        $scope.employeeArray.push($scope.formContent);
        $scope.formContent = {};
    }
}]); //end myApp.controller
