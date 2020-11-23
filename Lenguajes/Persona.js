class Person {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
}

const p1 = new Person('Pepe', 23)
p1.altura = 178
p1.saludar()
console.log(p1)
 
class Alumno extends Person {
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