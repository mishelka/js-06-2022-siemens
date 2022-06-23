class Person {
  constructor(id, name, birthDate = new Date(), favouriteColor) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.favouriteColor = favouriteColor;
  }
}

let persons = [
  new Person(15, "Jan", new Date(), "red"),
  new Person(25,"Michal", new Date(), "blue"),
  new Person(0, "Petra", new Date(), "red"),
  new Person(55, "Marcela", new Date(), "blue"),
];
let selectedPersonId = -1;

window.onload = () => renderTable();

function handleSubmit(event) {
  event.preventDefault();
  //validation!!
  const person = new Person(
    persons.length + 1,
    document.personForm.fname.value,
    new Date(document.personForm.birthDate.value)
  );
  persons.push(person);
  renderTable();
}

function handleReset(event) {
  event.preventDefault();
  document.personForm.fname.value = '';
  document.personForm.birthDate.value = '2022-02-15';
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
    <td>${p.birthDate.toLocaleDateString()}</td>
  </tr>
  `);
}

function deletePerson() {
  if(selectedPersonId !== -1) {
    persons = persons.filter(p => p.id !== selectedPersonId);
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