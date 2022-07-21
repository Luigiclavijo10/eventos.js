
class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
}

const tirador = []

const from = document.getElementById("idForm")
const divUsario = document.getElementById("divUsario")
const botonUsuario = document.getElementById("botonUsuario")


from.addEventListener("submit", (event) =>{
    event.preventDefault()


 let username = document.getElementById("idUser").value
 let email = document.getElementById("idEmail").value
 let password = document.getElementById("idPassword").value

const user = new User(username,email,password)
tirador.push(tirador)
console.log(tirador)

form.reset()

})

botonUsuario.addEventListener("click", () =>{
    tirador.forEach(tirador => {
        divUsario.innerHTML += `
        <d class="card" style="width: 18rem; margin;3px">
           <div class="card-body">
            <h5 class="card-title">${user.username}</h5>
             <p class="card-text">${user.email}</p>
     
       </div>
       </d}iv>`
    })
})


// crear juego//

const grid = document.querySelector(".grid")
let currentTiradorIndex = 202
let width = 15


for (let i = 0; i < 255 ; i++) {
    const squares = document.createElement("div") 
     grid.appendChild(squares)
}

const squares = Array.from(document.querySelectorAll(".grid div"))

const alienInvasores = [
    0,1,2,3,4,5,6,7,8,9
    ,15,16,17,18,19,20,21,22,23,24
    ,30,31,32,33,34,35,36,37,38,39
]


function draw() {
    for (let i = 0; i < alienInvasores.length; i++) {
        squares [alienInvasores[i]].classList.add("invadir")
    }
}

draw ()


function remover() {
    for (let i = 0; i < alienIvaders.length; i++) {
        squares [alienInvasores[i]].classList.remove("invadir")
    }
}

squares [currentTiradorIndex].classList.add("tirador")

function moverTirador(e) {
    squares[currentTiradorIndex].classList.remove("tirador")
    switch(e.key) {
        case "ArrowLeft":
            if (currentTiradorIndex % width !== 0) currentTiradorIndex -=1
            break
        case "ArrowRight":
            if (currentTiradorIndex % width < width -1) currentTiradorIndex +=1
             break
    }
    squares [currentTiradorIndex].classList.add("tirador")

}
document.addEventListener("keydown", moverTirador)

/*function moverInvasores () {
    const leftEdge = alienInvasores[0] % width === 0
    const rightEdge = alienInvasores[alienInvasores.length -i] % width === width -i

    }*/