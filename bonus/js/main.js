/*
  Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
  Ogni membro è caratterizzato dalle seguenti informazioni:
    -nome
    -ruolo
    -foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 */

// MILESTONE 0
const team = [
  {
    nome: 'Wayne <br> Barnett',
    ruolo: 'Founder & CEO',
    foto: '../assets/img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela <br> Caroll',
    ruolo: 'Chief Editor',
    foto: '../assets/img/angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter <br> Gordon',
    ruolo: 'Office Manager',
    foto: '../assets/img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela <br> Lopez',
    ruolo: 'Social Media Manager',
    foto: '../assets/img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott <br> Estrada',
    ruolo: 'Developer',
    foto: '../assets/img/scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara <br> Ramos',
    ruolo: 'Graphic Designer',
    foto: '../assets/img/barbara-ramos-graphic-designer.jpg'
  }
]

// Seleziona il contenitore di tutte le colonne
const containerEl = document.querySelector('.container')

// Contatore per tenere traccia del numero di carte già inserite nella riga corrente
let cardsInRow = 0

// Crea una nuova riga per la prima carta
let newRow = document.createElement('div')
newRow.className = 'row'
containerEl.appendChild(newRow)

for (let i = 0; i < team.length; i++) {
  const member = team[i]
  
  // Se abbiamo già inserito tre carte nella riga corrente, creiamo una nuova riga
  if (cardsInRow >= 3) {
    newRow = document.createElement('div')
    newRow.className = 'row'
    containerEl.appendChild(newRow)
    cardsInRow = 0
  }
  
  // Crea una nuova colonna per la carta corrente
  const newCol = document.createElement('div')
  newCol.className = 'col'
  
  // Crea la nuova carta
  const newCard = document.createElement('div')
  newCard.className = 'card'
  newCard.innerHTML += `<h2>${member.nome} </h2> <h3>${member.ruolo}</h3>`
  
  const newDiv = document.createElement('div')
  newDiv.className = 'img-container'
  newDiv.innerHTML += `<img src="${member.foto}" alt="">`
  
  newCard.appendChild(newDiv)
  
  newCol.appendChild(newCard)
  newRow.appendChild(newCol)
  
  cardsInRow++
}
