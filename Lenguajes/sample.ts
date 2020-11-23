let w : number
w = 12 
// w = 'Pepe' da error
let z = 11
// z = 'Pepe' da error porque hay asignación dinámica de tipos

let user : any
user = 'Pepe'
let id : string | number
// id = true
console.log(w)
console.log(user)

let aData : Array<number>