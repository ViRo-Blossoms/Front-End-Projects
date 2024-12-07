let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createdDate.getDay()}/${createdDate.getMonth()}/${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`; //dd/mm/yyyy hh:mm
    row.insertCell(1).innerHTML = document.getElementById('appointment-date').value;
    row.insertCell(2).innerHTML = document.getElementById('appointment-time').value;
    row.insertCell(3).innerHTML = document.getElementById('patient-name').value;
    row.insertCell(4).innerHTML = document.getElementById('patient-number').value;
    row.insertCell(5).innerHTML = document.getElementById('provider').value;
    let actions = row.insertCell(6);
    console.log(`Creating row with id; item-${id}`)
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('appointment-date').value = '';
    document.getElementById('appointment-time').value = '';
    document.getElementById('patient-name').value = '';
    document.getElementById('patient-number').value = '';
    document.getElementById('provider').value = 'Select...';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id; item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}