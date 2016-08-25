var myApp = angular.module("myApp", ["$scope", "$http", function($scope, $http) {
    console.log("task controller working!");
    $scope.taskContent = "";
    $scope.tasks = [];
    getTasks();

}]);

myApp.controller("taskController", ["$scope", "$http", function($scope, $http) {
    console.log("taskController is a go");

    $scope.appendDom = function(empInfo) {
        console.log($scope.taskContent);
        // $('#container').append('<div class="person"></div>');
        // // making a shortcut to access last children of #container
        // var $el = $('#container').children().last();
        // $el.append('<p>' + 'Employee Info: ' + empInfo.employeeFirstName +
        //     ' ' + empInfo.employeeLastName +
        //     ', ' + 'ID: ' + empInfo.employeeID + ', ' +
        //     'Title: ' + empInfo.employeeJobTitle + ', ' +
        //     'Salary: ' + empInfo.employeeSalary +
        //     '<br></br>' + 'Yearly Cost to Company:' +
        //     ' ' + yearlySalary + ' ' + '<br></br>' +
        //     'Monthly Salary Costs:' +
        //     ' ' + Math.round(monthlyCost) + '</p>');
        // $('#container').append('<button class="deleteMe">Delete</button>');
        // // delete button
        // $('.deleteMe').on('click', function() {
        //     $('.person').last().remove();
        //     $('.deleteMe').last().remove();
        //
        // });

        $http.post('/tasks', {
                content: $scope.taskContent
            })
            .then(function(response) {
                console.log("post response: ", response);
                if (response.status == 201) {
                    $scope.taskContent = "";
                    getTasks();
                } else {
                    console.log("error posting new task");
                }
            });
    }


}]); //end myApp.controller



//
// $(document).ready(function() {
//     var monthlySalaryCost = 0;
//     var yearlySalary = 0;
//     var monthlyCost = 0;
//     var employees = [];
//     $('#employeeInfo').on('submit', function(event) {
//         event.preventDefault();
//
//         // initialize a new variable as an empty object
//         var values = {};
//
//         // convert the form inputs into an array
//         var fields = $('#employeeInfo').serializeArray();
//
//         // iterate over the array and transfer each index
//         // into a new property on an object with the value of
//         // what was entered.
//         fields.forEach(function(element, index, array) {
//             // review index notation vs. dot notation on objects
//             // here, dot notation wouldn't work
//             values[element.name] = element.value;
//         });
//
//         console.log(values);
//         employees.push(values);
//
//         // clear out inputs
//         $('#employeeInfo').find('input[type=text], input[type=number]').val('');
//         // brings cursor back to First Name Box, allowing quicker entry/ better UI
//         $('#employeeFirstName').focus();
//         // calc salaries total per year & monthly company costs
//         monthlySalaryCost = parseInt(values.employeeSalary);
//         yearlySalary = yearlySalary + monthlySalaryCost;
//         monthlyCost = yearlySalary / 12;
//         // append to DOM
//         appendDom(values);
//
//
//     });
// }); //end doc ready
//
// // Right now, the delete function deletes everything - to fix this,
// //  we could make the on.click function grab the individual button's
// //  parent container as the target to delete, by using $(this).parent
