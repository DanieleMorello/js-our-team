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
    nome: 'Fabio',
    ruolo: 'Docente',
    foto: 'https://www.linkedin.com/in/fabio-pacifici-com/overlay/photo/'
  },
  {
    nome: 'Donato',
    ruolo: 'Tutor',
    foto: 'https://www.linkedin.com/in/donato-riccio-wda/overlay/photo/'
  },
  {
    nome: 'Giuliano',
    ruolo: 'Tutor',
    foto: 'https://www.linkedin.com/in/giuliano-gostinfini/overlay/photo/'
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