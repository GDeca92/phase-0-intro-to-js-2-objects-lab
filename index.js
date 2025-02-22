const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
    }

    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newEmployee = {...employee}
        newEmployee[key] = value
        return newEmployee;
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value
        return employee;
    }

    function deleteFromEmployeeByKey(employee, key, value){
        const cloneEmployee = {...employee}
        delete cloneEmployee[key]
        return cloneEmployee
    }

    function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
        delete employee[key]
        return employee
    }