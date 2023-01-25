class Person {

    static countPeaple = 0;

    constructor (name, lastName, age){

        this._name = name;
        this._lastName = lastName;
        this._age = age;

        Person.countPeaple++
    }

    get name(){return this._name}
    set name(name){this._name = name}

    get lastName(){return this._lastName}
    set lastName(lastName){this._lastName = lastName}

    get age(){return this.age}
    set age(age){this._age = age}

    fullName(){return 'ID: ' + Person.countPeaple + ' ' + this._name + ' ' + this.lastName + ' Edad: ' + this._age}

    toString(){return this.fullName()}
    
}

class Employee extends Person {

    static countEmployee = 0;

    constructor(name, lastName, age, salary){

        super(name, lastName, age);

        this._salary = salary
       // this._idEmployee
        
        ++Employee.countEmployee

    }

   // get idEmployee(){return this._idEmployee}

    get salary(){return salary}
    set salary(salary){this._salary = salary}
 
    fullName(){return super.fullName() + ' Employee ID: ' + Employee.countEmployee + ' Salary: $' + this._salary}

}

class Customer extends Person {

    static countCustomer = 0

    constructor(name, lastName, age, registerDate){

        super(name, lastName, age);

        this._registerDate = new Date
        //this._idCustomer

        ++Customer.countCustomer

    }

    //get idCustomer(){return this._idCustomer}

    get registerDate(){return Date}
    set resgisterDate(resgisterDate){this._registerDate = Date}

    fullName(){return super.fullName() + ' Customer ID: ' + Customer.countCustomer + ' ' + this._registerDate}

}

let person1 = new Customer ('Rodrigo', 'Celis', 25);
console.log(person1.toString());

let person2 = new Customer ('Nailea', 'Almeida', 21);
console.log(person2.toString())

let persona3 = new Employee ('Mayra', 'Zamora', 50, 2456);
console.log(persona3.toString())

let persona4 = new Employee ('Fernando', 'Celis', 60, 3450);
console.log(persona3.toString())