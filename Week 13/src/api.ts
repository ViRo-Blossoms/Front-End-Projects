type People = {
    id: number
    name: string
    number: string
  }

export async function fetchAllPeople() {
    const response = await fetch("http://localhost:3000/people")
    return response.json()
}

export async function postPerson(newPersonData: {name: string, number: string}) {
    const response = await fetch("http://localhost:3000/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPersonData)
    })
    return response.json()
}

export async function putPerson(updatedPerson: People) {
    await fetch("http://localhost:3000/people/" + updatedPerson.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPerson)
    })
}

export async function deletePerson(idToDelete: number) {
    await fetch("http://localhost:3000/people/" + idToDelete, {
        method: "DELETE"
    })
}