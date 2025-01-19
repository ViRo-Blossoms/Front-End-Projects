import { nameText, numberText } from "./main"

export default function renderPersonForm(personData: {name: string, number: string}) {
    nameText.value = personData.name
    numberText.value = personData.number
}