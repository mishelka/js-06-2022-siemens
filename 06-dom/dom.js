const BASE_URL =
  'https://jsonplaceholder.typicode.com/users';

class Person {
  constructor(id, name, emailDate = 'abc@abc.com', phone = '0904 495 332') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

let persons = [];
let selectedPersonId = -1;

window.onload = async () => {
  await fetchPersons();
}
async function fetchPersons() {
  try {
    const response = await fetch(BASE_URL);
    if(response.status === 200) {
      persons = await response.json();
      console.log(persons);
      renderTable();
    }
  } catch(err) {
    console.error("Sorry, an error occured", err);
  }

  // /*--- cez promises: ---*/
  // fetch(BASE_URL).then(
  //   (response) => {
  //     if(response.status === 200) {
  //       response.json().then((data) => {
  //         persons = data;
  //         renderTable();
  //       });
  //     }
  //   },
  //   (errorResponse) => {
  //     console.error("Sorry, an error occured", errorResponse);
  //   }
  // );
}

function handleSubmit(event) {
  event.preventDefault();
  //validation!!
  const person = new Person(
    persons.length + 1,
    document.personForm.fname.value,
    new Date(document.personForm.email.value)
  );
  persons.push(person);
  renderTable();
}

function handleReset(event) {
  event.preventDefault();
  document.personForm.fname.value = '';
  document.personForm.email.value = '@';
}


function renderTable() {
  // const table = document.getElementById("personForm");
  const table = document.getElementById("personTable")
  table.innerHTML = "";
  persons.forEach(p => table.innerHTML += `
  <tr id="person-row-${p.id}" 
      onclick="selectRow(${p.id})"
      class="${selectedPersonId === p.id ? 'selected' : ''}">
    <td>${p.id}</td>
    <td>${p.name}</td>
    <td>${p.email}</td>
    <td>${p.phone}</td>
    <td><button onclick="deletePerson(${p.id})">Delete</button></td>
  </tr>
  `);
}

function deletePerson(id) {
  const idToDelete = id === undefined ? selectedPersonId : id;
  if (idToDelete !== -1) {
    persons = persons.filter(p => p.id !== idToDelete);
  }
  selectedPersonId = -1;
  renderTable();
}

function selectRow(p) {
  console.log('selecting: ' + p);
  selectedPersonId = p;
  renderTable();
}

function moveLi() {
  let superWidget = document.getElementById("widget1");
  let ul = superWidget.parentNode;
  ul.appendChild(superWidget);
}

function hideLi() {
  event.stopPropagation()
  let ul = document.getElementById("ul");
  const isHidden = ul.getAttribute("class")?.includes("hidden");
  console.log(isHidden);
  ul.setAttribute("class", isHidden ? "" : "hidden");
}