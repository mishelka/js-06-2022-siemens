const BASE_URL =
  'https://jsonplaceholder.typicode.com/users';

class Person {
  constructor(id, name, email = 'abc@abc.com', phone = '0904 495 332') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

let persons = [];
let selectedPersonId = -1;
let editing = false;

let errors = {};

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
  const valid = validate();

  if(valid) {
    if (editing) {
      const person = persons.find(p => p.id === selectedPersonId)
      person.name = document.personForm.fname.value;
      person.email = document.personForm.email.value;
      hideForm();
    } else {
      const person = new Person(
        persons.length + 1,
        document.personForm.fname.value,
        document.personForm.email.value,
      );
      persons.push(person);
      hideForm();
    }
  }
  //renderErrors();
  renderTable();
}

function hideForm() {
  document.getElementById("form").innerHTML = "";
}

function validate() {
  const nameInput = document.personForm.fname;
  const emailInput = document.personForm.email;

  if(nameInput.hasAttribute('required')) {
    if(nameInput.value) {
      errors.fname = 'Name is required.';
      return false;
    }
    const maxLength = nameInput.getAttribute("maxlength");
    if(
      nameInput.hasAttribute("maxlength")

      && nameInput.value.length >
      maxLength) {
      errors.fname = 'Name needs to have max ' + maxLength;
    }
  }
  return true;

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
    <td><button onclick="editPerson(${p.id})">Edit</button></td>
    <td><button onclick="deletePerson(${p.id})">Delete</button></td>
  </tr>
  `);
}

function renderForm() {
  const person = persons.find(p => p.id === selectedPersonId);
  const form = `
  <h1>${editing ? 'Edit person' : 'Add person'}</h1>
        <form name="personForm"
              onsubmit="handleSubmit(event);"
              onreset="handleReset(event)">
            <label for="fname">Name:</label>
            <input type="text" id="fname" name="fname"
                   value="${person.name}"
                   required maxlength="50"
            >
            <span class="error">${errors.fname ? errors.fname : ""}</span>
            <br/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"
                   value="${person.email}"
                   required maxlength="30"
            >
            <span class="error">${errors.email ? errors.email : ""}</span>
            <br>

            <br>
            <button type="submit">OK</button>
    <!--        <input type="submit" value="OK" onclick="handleSubmit(event)">-->
            <button type="reset">Reset</button>
        </form>
  `;
  document.getElementById("form").innerHTML = form;
}

function deletePerson(id) {
  event.stopPropagation();
  const idToDelete = id === undefined ? selectedPersonId : id;
  if (idToDelete !== -1) {
    persons = persons.filter(p => p.id !== idToDelete);
  }
  selectedPersonId = -1;
  renderTable();
}

function editPerson(id) {
  event.stopPropagation();
  console.log("editing ", id);
  editing = true;
  selectedPersonId = id;
  renderForm();
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