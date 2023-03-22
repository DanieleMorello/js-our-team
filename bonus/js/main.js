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
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: '../assets/img/wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: '../assets/img/angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: '../assets/img/walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: '../assets/img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: '../assets/img/scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: '../assets/img/barbara-ramos-graphic-designer.jpg'
  }
]

// MILESTONE 1
for (let i = 0; i < team.length; i++) {
  const member = team[i]
  // console.log(member['nome'], member['ruolo'], member['foto'])

  // MILESTONE 2:
// Seleziona l' elemento col
const colEl = document.querySelector('.col')

// Crea l' elemento card
const newCard = document.createElement('div.card')

// Aggiunge contenuto
newCard.innerHTML += `<h1>Nome: ${member.nome} </h1> <h2>Ruolo: ${member.ruolo}</h2>` 
console.log(newCard);
// Crea il tag img
const newDiv = document.createElement('div')

// Aggiunge contenuto
newDiv.innerHTML += `<img src="${member.foto}" alt="">`
console.log(newDiv)
// Stampa
newCard.appendChild(newDiv)

// Stampa
colEl.appendChild(newCard)
}