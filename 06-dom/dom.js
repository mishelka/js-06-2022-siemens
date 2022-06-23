class Person {
  constructor(name, birthDate = new Date(), favouriteColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.favouriteColor = favouriteColor;
  }
}

const persons = [
  new Person("Jan", new Date(), "red"),
  new Person("Michal", new Date(), "blue"),
  new Person("Petra", new Date(), "red"),
  new Person("Marcela", new Date(), "blue"),
];

window.onload = () => renderTable();

function handleSubmit(event) {
  event.preventDefault();
  //validation!!
  const person = new Person(
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
  <tr>
    <td>${p.name}</td>
    <td>${p.birthDate.toLocaleDateString()}</td>
  </tr>
  `);
}

function moveLi() {
  let superWidget = document.getElementById("widget1");
  let ul = superWidget.parentNode;
  ul.appendChild(superWidget);
}