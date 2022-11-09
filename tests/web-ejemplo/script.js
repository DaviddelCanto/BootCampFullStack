let firstName = 'Miguel'
const lastName = 4
var isDevDeveloper = true 
const List =[]

List.push(1)

console.log(firstName.toUpperCase())
console.log(List[0])

List.concat(32)

// List.forEach(hace algo con esa iteracion)
const persona = {
    firstName : 'David',
    email : 'david@1.com',
    links : ['1.com','2.com']
}

console.log(persona.firstName)

const webs = 'links'

console.log(persona[webs][1])

// Function expression  se le asigna a una constante
const sumar = (a,b)=>{
    console.log(a)
    console.log(b)
    return a+b
}

// Declaracion , pueden estar en cualquier sitio del codigo

function restar(a,b){
    return a-b
}

console.log(sumar(23,54))
