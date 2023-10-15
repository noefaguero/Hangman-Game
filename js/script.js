// Words array
let posiblesPalabras = [
  ["amarillo", "Un color"],
  ["atlantico", "Un océano"],
  ["ordenador", "Una gran herramienta  ;)"],
  ["laurel", "Un árbol"],
  ["plaza", "Espacio público"],
  ["avenida", "Espacio público"],
  ["calle", "Espacio público"],
  ["desarrolador", "Una profesión"],
  ["rueda", "Gran invento"],
  ["cereza", "Una fruta"],
  ["petanca", "Un juego"],
  ["pintor", "Una profesión"],
  ["naranjo", "Un árbol"],
  ["higuera", "Un árbol"],
  ["everest", "Un monte"],
  ["relampago", "Antecede al trueno"],
  ["jirafa", "Un animal"],
  ["nogal", "Un árbol"],
  ["tigre", "Un animal"],
  ["elefante", "Un animal"],
  ["mosquito", "Un insecto"],
  ["caballo", "Un animal"],
  ["rinoceronte", "Un animal"],
  ["portugal", "Un país"],
  ["españa", "Un país"],
  ["noruega", "Un país"],
  ["italia", "Un país"],
  ["rusia", "Un país"],
  ["uruguay", "Un país"],
  ["ilustracion", "Representación gráfica"],
  ["tarta", "De la pastelería"],
  ["pepito", "De la pastelería"],
  ["excursion", "Actividad en la naturaleza"],
  ["empanadilla", "De la panadería"],
  ["pastel", "De la pastelería"],
  ["colegio", "Lugar para estudiar"],
  ["carrera", "Competición"],
  ["mermelada", "Confitura"],
];

let abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// to show the status of successes
let palabra = document.getElementById("palabra");


// button to start the game again
let inicio = document.getElementById("inicio");

let botonera = document.getElementById("botonera");
let intentos = document.getElementById("intentos");
let imagen = document.getElementById("imagen");
let pista = document.getElementById("pista");


let secreta 
let palabrasecreta
let palabraoculta

//////////////////////// INITIAL CHARGE FUNCTIONS ///////////////////////////

//select the secret word and the clue
const setWord = () => {
  secreta = posiblesPalabras[Math.floor(Math.random()*posiblesPalabras.length)]
  palabrasecreta = secreta[0].toUpperCase() 
}

//create hyphens
const setHyphens = () => {
 
  let guion = "_"
  palabraoculta = guion.repeat(palabrasecreta.length)
  palabra.textContent = palabraoculta
}


//create letter buttons
const setButtons = () => {
  
  let fragment = document.createDocumentFragment()
  
  abecedario.forEach(element => {
    let letra = document.createElement("BUTTON")
    letra.classList.add("btn", "btn-outline-success", "m-1", "font-weight-bold")
    letra.textContent = element
    fragment.append(letra)
  })

  botonera.append(fragment)
}


document.addEventListener("DOMContentLoaded", () => {
  setWord()
  setHyphens()
  setButtons()
})

//////////////////////// CHECK LETTER FUNCTIONS ///////////////////////////

// check button  
const checkButton = (cont, event) => {
  event.target.classList.remove("btn-outline-success", "font-weight-bold")
  if (cont > 0) {
    //change buttons style
    event.target.classList.add("tamanio-botones", "btn-success")
  } else {
    //change buttons style
    event.target.classList.add("tamanio-botones", "btn-danger")
    // decrease attempts
    intentos.textContent = parseInt(intentos.textContent) - 1
  }
}

// show letters in the hidden word and count successes
const showLetters = (letra) => {
  let cont = 0
    for (let i = 0; i < palabrasecreta.length; i++) {
      if (palabrasecreta[i] == letra) {
        palabraoculta = palabraoculta.substring(0, i) + letra + palabraoculta.substring(i + 1);
        cont ++
      } 
      palabra.textContent = palabraoculta 
    }
  return cont
}



// check letter when pressing
botonera.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const letra = event.target.textContent

    checkButton(showLetters(letra),event)
    
  }
})
    


