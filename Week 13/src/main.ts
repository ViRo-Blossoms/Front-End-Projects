import "bootstrap/dist/css/bootstrap.min.css"
import { deletePerson, fetchAllPeople, putPerson, postPerson } from "./api.ts"
import renderPersonForm from "./renderPeopleForm.ts"

type People = {
  id: number
  name: string
  number: string
}

let peopleList: People[] = []
let personToEditId: null | number = null

export const nameText = document.getElementById("people-name") as HTMLTextAreaElement
export const numberText = document.getElementById("people-number") as HTMLTextAreaElement
const peopleContainer = document.getElementById("peopleContainer") as HTMLDivElement

document.getElementById("savePerson")!.addEventListener("click", onSavePersonClick)

// Render
function renderListOfPeople() {
    peopleContainer.innerHTML = ""

    if (peopleList.length === 0) {
        peopleContainer.innerHTML = "No People Yet!"
    }

    peopleList.map(renderPerson).forEach(div => peopleContainer.appendChild(div))
}

function renderPerson(person: People) {
    const personDiv = document.createElement("div")
    personDiv.className = "bg-dark mb-3 p-4"
    personDiv.innerHTML = `
    My name is ${person.name} and my favorite number is ${person.number}
    <button id="edit-button" class="btn btn-sm btn-outline-primary">Edit</button>
    <button id="delete-button" class="btn btn-sm btn-outline-danger">Delete</button>
    `

    personDiv.querySelector("#edit-button")!.addEventListener("click", () => { //! is the same as "As whatevr"
        personToEditId = person.id
        renderPersonForm(person)
    })

    personDiv.querySelector("#delete-button")!.addEventListener("click", async () => {
        await deletePerson(person.id)
        const indexToDelete = peopleList.indexOf(person)
        peopleList.splice(indexToDelete, 1)
        renderListOfPeople()
    })
    return personDiv
}

async function onSavePersonClick(event: Event) {
    event.preventDefault()
    const person = {
        name: nameText.value,
        number: numberText.value
    }
    
    if (personToEditId !== null) {
        const personToUpdate = {
          ...person,
          id: personToEditId
        }
        await putPerson(personToUpdate)
        const indexToReplace = peopleList.findIndex(p => p.id === personToEditId)
        peopleList[indexToReplace] = personToUpdate
    } else {
        const createdPerson = await postPerson(person)
        peopleList.push(createdPerson)
    }

    renderListOfPeople()
    personToEditId = null
    renderPersonForm({name: "", number: ""})
}

// Startup
async function Startup() {
    renderListOfPeople()
    peopleList = await fetchAllPeople()
    renderListOfPeople()
     
}
Startup()
// Obviously, huge thank you to Natalie C (natafaye)