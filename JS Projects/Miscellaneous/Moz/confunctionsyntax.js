// **ES5**
var Person = function(first, last) {
    if (!(this instanceof Person)) {
        throw new Error("Person is a constructor function, use new with it");
    }
    this.first = first;
    this.last = last;
};

Person.prototype.personMethod = function() {
    // ...
};

var Employee = function(first, last, position) {
    if (!(this instanceof Employee)) {
        throw new Error("Employee is a constructor function, use new with it");
    }
    Person.call(this, first, last);
    this.position = position;
};
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.employeeMethod = function() {
    // ...
};

var Manager = function(first, last, position, department) {
    if (!(this instanceof Manager)) {
        throw new Error("Manager is a constructor function, use new with it");
    }
    Employee.call(this, first, last, position);
    this.department = department;
};
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.personMethod = function() {
    var result = Employee.prototype.personMethod.call(this);
    // ...use `result` for something...
    return result;
};
Manager.prototype.managerMethod = function() {
    // ...
};
