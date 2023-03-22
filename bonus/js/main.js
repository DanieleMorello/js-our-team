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
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
]

// MILESTONE 1
for (let i = 0; i < team.length; i++) {
  const member = team[i]
  console.log(member['nome'], member['ruolo'], member['foto'])

  // MILESTONE 2:
// Seleziona l' elemento col
const colEl = document.querySelector('.col')

// Crea l' elemento card
const newCard = document.createElement('div.card')

// Aggiunge contenuto
newCard.innerHTML += `Nome: ${member.nome} <br> Ruolo: ${member.ruolo} <br> Foto: ${member.foto}<br><br>` 

// Stampo
colEl.appendChild(newCard);
}