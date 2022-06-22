const persons = [];

window.onload = () => {
  document.getElementById("personTable").innerHTML = `<tr><td>Nejake meno</td><td>Nejaky datum</td></tr>`;
    // persons.forEach(p => {
    //   `
    //           <tr>
    //                 <th>${p.name}</th>
    //                 <th>p.birthDate</th>
    //             </tr>
    //   `
    // })

};

class Person {
  constructor(name, birthDate = new Date(), favouriteColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.favouriteColor = favouriteColor;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const person = new Person(document.personForm.fname.value,
  new Date(document.personForm.birthDate.value));
  console.log(person);
  this.persons.push(person);
}