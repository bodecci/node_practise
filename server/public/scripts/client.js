//Employee class template
class Employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
        this.first = firstNameIn;
        this.last = lastNameIn;
        this.id = idIn;
        this.title = titleIn;
        this.salary = salaryIn;
    } //end constructor
} // end of Employee class

let employees = [];
let monthTotal = 0;
const budget = 20000;

$(document).ready(function () {
    console.log('JQ loaded');

    $('#submit').on('click', getInput);

});

//gets user inputs, create new Employee class and pushes into the array
function getInput() {
    //get inputs
    let inputGet = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(),
        $('#idIn').val(), $('#titleIn').val(), $('#salary').val());
    if ($('#firstNameIn').val() == '' || $('#lastNameIn').val() == '' ||
        $('#idIn').val() == '' || $('#titleIn').val() == '' || $('#salary').val() == '') {
        alert("ALL FIELDS MUST BE FILLED!!!");
    } else {
        employees.push(inputGet);
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#salary').val('');
        //call tableDisplay function
        tableDisplay();
        monthlyTotal();
    }

}

// displays the the Employee info in the table
function tableDisplay() {
    $('#tableDisplay').empty();
    for (employee of employees) {
        let display = `<tr>
                        <td>${employee.first}</td>
                        <td>${employee.last}</td>
                        <td>${employee.id}</td>
                        <td>${employee.title}</td>
                        <td>${employee.salary}</td>
                        <td><button class="btn btn-danger" 
                        id="${employee.id}">Delete</button></td>
                    </tr>`;

        $('#tableDisplay').append(display);
        $(`#${employee.id}`).on('click', function () {
            employees.splice(employees.indexOf(employee), 1);
            $(`${employee.salary}`).text(0);
            $(this).parent().parent().remove();

            monthlyTotal();
            displayMonthlyText();
        });
    } //end for of loop
} //end of tableDisplay

//tracks the monthly total salary and displays it
function monthlyTotal() {
    let totalSalary = 0;
    for (people of employees) {
        totalSalary += (parseInt(people.salary));
    }
    monthTotal = (totalSalary / 12).toFixed(2);
    //$('#displayMonthly').empty();
    $('#displayMonthly').html(`<h2 id="displayMonthly">
                    Monthly Total:$${monthTotal} </h2>`);
    displayMonthlyText();
} //end monthlyTotal 

//displays the monthly total as red when it exceeds the budget
function displayMonthlyText() {
    if (monthTotal <= budget) {
        $('#displayMonthly').html(`<h3 id="displayMonthly">
                            Monthly Total:$${monthTotal} </h3>`);
        $('#displayMonthly').css('color', 'black');
    } else {
        $('#displayMonthly').html(`<h3 id="displayMonthly">
                            Monthly Total:$${monthTotal} </h3>`);
        $('#displayMonthly').css('color', 'red');
    }
} //end displayMonthlyText