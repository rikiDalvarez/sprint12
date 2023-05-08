//nivel 1
//exercici 1

const addTwoNames = (first, second) => {
	console.log(`username is ${first} + ${second}`)
}

//nivel 2
//exercici 1
const retrnObject = (param) => {
	let obj = {};
	obj.name = param;
	return obj
}

//nivel 2
//exercici 2
class Person {
	constructor(name) {
		this.name = name;
	}
	dirNom = () => {
		console.log(this.name)
	}
}

let riki = new Person("riki")
riki.dirNom()


//nivel3
//exercise 1

//FIRST APPROACH
class Ordenador {
	constructor() {
		throw new Error("no se puede instanciar Ordenador")
	}
	test(params) {
		console.log("this is a computer" + " " + params)
	}
}

class Mac {
	constructor(price, size) {
		this.price = price;
		this.size = size;
	}
	price() { console.log(this.price) }
}

let macbook = new Mac(100, 13);

macbook.prototype = Object.create(Ordenador.prototype);

console.log(macbook.prototype.test("test"));


//SECOND APPROACH
function createOrdenador(string) {
	let computer = Object.create(Ordenador.prototype)
	computer.name = string
	return computer
}

//THIRD APPROACH
function Employee() {
	if (this.constructor === Employee) {
		throw new Error("FYI: Instance of Abstract class cannot be instantiated");
	}
};

Employee.prototype.display = function () {
	return "Employee name is: " + this.empName;
}

function Manager(fullName) {
	this.empName = fullName
}

Manager.prototype = Object.create(Employee.prototype);

let test = new Manager("jamming")

//test
console.log(test.display())
createOrdenador("mac")
createOrdenador("asus")





