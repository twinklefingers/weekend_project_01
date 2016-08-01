$(document).ready(function() {
    var monthlySalaryCost = 0;
    var yearlySalary = 0;
    var monthlyCost = 0;
    var array = [];
    $('#employeeInfo').on('submit', function(event) {
        event.preventDefault();

        // initialize a new variable as an empty object
        var values = {};

        // convert the form inputs into an array
        var fields = $('#employeeInfo').serializeArray();

        // iterate over the array and transfer each index
        // into a new property on an object with the value of
        // what was entered.
        fields.forEach(function(element, index, array) {
            // review index notation vs. dot notation on objects
            // here, dot notation wouldn't work
            values[element.name] = element.value;
        });

        console.log(values);

        // clear out inputs
        $('#employeeInfo').find('input[type=text]').val('');

        // append to DOM
        appendDom(values);

        function appendDom(empInfo) {
            $('#container').append('<div class="person"></div>');
            var $el = $('#container').children().last();
            // calc salaries total per year & monthly company costs
            monthlySalaryCost = parseInt(values.employeeSalary);
            yearlySalary = yearlySalary + monthlySalaryCost;
            monthlyCost = yearlySalary / 12;
            $el.append('<p>' + empInfo.employeeFirstName +
                ' ' + empInfo.employeeLastName +
                ' ' + empInfo.employeeID + ' ' +
                empInfo.employeeJobTitle + ' ' +
                empInfo.employeeSalary + ' ' +
                '<br></br>' + 'Yearly Cost to Company:' +
                ' ' + yearlySalary + ' ' + '<br></br>' +
                'Monthly Salary Costs:' +
                ' ' + monthlyCost + '</p>');
        }
    });
});
