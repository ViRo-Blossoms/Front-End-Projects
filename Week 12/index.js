let peopleList = []
let personToEditId = null

const nameText = document.getElementById("people-name")
const numberText = document.getElementById("people-number")
const peopleContainer = document.getElementById("peopleContainer")

// Render
function renderListOfPeople() {
    peopleContainer.innerHTML = ""

    if (peopleList.length === 0) {
        peopleContainer.innerHTML = "No People Yet!"
    }

    peopleList.map(renderPerson).forEach(div => peopleContainer.appendChild(div))
}

function renderPerson(person) {
    const personDiv = document.createElement("div")
    personDiv.className = "bg-dark mb-3 p-4"
    personDiv.innerHTML = `
    My name is ${person.name} and my favorite number is ${person.number}
    <button id="edit-button" class="btn btn-sm btn-outline-primary">Edit</button>
    <button id="delete-button" class="btn btn-sm btn-outline-danger">Delete</button>
    `

    personDiv.querySelector("#edit-button").addEventListener("click", () => {
        personToEditId = person.id
        renderPersonForm(person)
    })

    personDiv.querySelector("#delete-button").addEventListener("click", async () => {
        await deletePerson(person.id)
        const indexToDelete = peopleList.indexOf(person)
        peopleList.splice(indexToDelete, 1)
        renderListOfPeople()
    })
    return personDiv
}

function renderPersonForm(personData) {
    nameText.value = personData.name
    numberText.value = personData.number
}

async function onSavePersonClick(event) {
    event.preventDefault()
    const person = {
        name: nameText.value,
        number: numberText.value
    }
    
    if (personToEditId !== null) {
        person.id = personToEditId
        await putPerson(person)
        const indexToReplace = peopleList.findIndex(p => p.id === personToEditId)
        peopleList[indexToReplace] = person
    } else {
        const createdPerson = await postPerson(person)
        peopleList.push(createdPerson)
    }

    renderListOfPeople()
    personToEditId = null
    renderPersonForm({name: "", number: ""}) //retyping it fixed it
}

// Fetch
async function fetchAllPeople() {
    const response = await fetch("http://localhost:3000/people")
    return response.json()
}

async function postPerson(newPersonData) {
    const response = await fetch("http://localhost:3000/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPersonData)
    })
    return response.json()
}

async function putPerson(updatedPerson) {
    await fetch("http://localhost:3000/people/" + updatedPerson.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPerson)
    })
}

async function deletePerson(idToDelete) {
    await fetch("http://localhost:3000/people/" + idToDelete, {
        method: "DELETE"
    })
}

// Startup
// retrievePeople()
async function Startup() {
    renderListOfPeople()
    peopleList = await fetchAllPeople()
    renderListOfPeople()
     
}
Startup()
// Obviously, huge thank you to Natalie C (natafaye) - Just slowly getting back up to speed
// after surgery and we hate that we borrowed so much of her code. If and when we get a 
// chance we'd like to try again but on our own. 

//json-server --watch db.json

// {
//     "People": [
//       {
//         "id": 1,
//         "name": "Ardent",
//         "number": 2
//       },
//       {
//         "id": 2,
//         "name": "Jen",
//         "number": 5
//       }
//     ]
//   }