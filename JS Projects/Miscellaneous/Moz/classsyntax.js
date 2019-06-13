// ***ES2015+**
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    personMethod() {
        // ...
    }
}

class Employee extends Person {
    constructor(first, last, position) {
        super(first, last);
        this.position = position;
    }

    employeeMethod() {
        // ...
    }
}

class Manager extends Employee {
    constructor(first, last, position, department) {
        super(first, last, position);
        this.department = department;
    }

    personMethod() {
        const result = super.personMethod();
        // ...use `result` for something...
        return result;
    }

    managerMethod() {
        // ...
    }
}
