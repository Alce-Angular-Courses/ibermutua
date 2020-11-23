class Person {
    nombre: string
    edad: number
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
}

const p1 = new Person('Pepe', 23)
p1.nombre = 'Jose'
let p2: Person
p2 = {nombre: 'Ernesto', edad: 32, saludar: ()=> {}}


// p1.altura = 178
p1.saludar()
console.log(p1)
console.log(p2)
 
class Alumno extends Person {
    curso: string
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Maria', 25, 'Angular')
a1.saludar()

/* class User {
    id: number | string
    nombre: string
    edad: number
    constructor(id:number | string, nombre: string, edad: number) {
        this.id = id
        this.nombre = nombre
        this.edad = edad
    }
} */

class User {
    //id: number | string
    // nombre: string
    // edad: number
    constructor(
        public id: number | string, 
        public nombre: string,
        public edad: number) {
        // this.id = id
        // this.nombre = nombre
        // this.edad = edad
    }
}


interface IUser {
    id: number | string
    nombre: string
    edad: number
}

let aUsers: Array<User>
let aUsers2: Array<IUser>