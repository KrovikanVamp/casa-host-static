var formObject = document.querySelectorAll('form');
var formStates = [
   [`<hr /><input type="text" name="Last-Name" placeholder="Last Name(s)" required autocomplete="off" />`, `<input type="text" name="Room-Number" placeholder="Room Number" required autocomplete="off" />`], // Name, room number
   [`<h2>Drinks</h2><hr />`, `<section id="drinks"><input type="checkbox" name="drinks" id="Coffee" value="Coffee"><label for="Coffee">Coffee</label><input type="checkbox" name="drinks" id="Milk" value="Milk"><label for="Milk">Milk</label><input type="checkbox" name="drinks" id="Tea" value="Tea"><label for="Tea">Tea</label><input type="checkbox" name="drinks" id="Juice" value="Juice"><label for="Juice">Juice</label></section>`], // Drinks
   [`<h2>Appetizer</h2><hr />`, `<section id="appetizers"><input type="checkbox" name="appetizer" value="cns" id="Chicken Noodle Soup"><label for="Chicken Noodle Soup">Chicken Noodle Soup</label><input type="checkbox" name="appetizer" value="Caesar" id="Caesar Salad"><label for="Caesar Salad">Caesar Salad</label></section>`], // Appetizer
   [`<h2>Entree</h2><hr />`, '<section id="entree"><input type="radio" value="mac" name="entree" id="mac" /><label for="mac">Macaroni and Cheese</label><input value="chknParm" type="radio" name="entree" id="chknParm" /><label for="chknParm">Chicken Parmesan</label></section>'], // Entree
   [`<h2>Dessert</h2><hr />`, `<section id="dessert"><input value="tiramisu" type="radio" name="dessert" id="tiramisu" value="tiramisu" /><label for="tiramisu">Tiramisu</label><input value="nsaCherry" type="radio" name="dessert" id="nsaCherry" value="nsaCherry" /><label for="nsaCherry">NSA Cherry Pie</label></section>`], // Dessert
   [`<h2>Special Requests</h2><hr />`, `<input type="text" name="additionalRequests" placeholder="Anything else?" autocomplete="off" />`]
];
var counter = 1;


function start() {
   formObject[0].children[0].insertAdjacentHTML("beforeend", formStates[0][0]);
   formObject[0].children[0].insertAdjacentHTML("beforeend", formStates[0][1]);
   console.log(formObject);
}


function next() {
   if (document.querySelector("body > form > h1 > input[type=text]:nth-child(2)").value.length == 0) {
      alert('Fill out the required fields!');
      return false;
   }
   for (let i = 0; i < formStates[counter].length; i += 2) {
      if (counter <= formStates.length) {
         formObject[0].children[formObject[0].childElementCount - 3].insertAdjacentHTML("afterend", formStates[counter][0]);
         formObject[0].children[formObject[0].childElementCount - 3].insertAdjacentHTML("afterend", formStates[counter][1]);
         counter += 1;
      } else {
         continue;
      }
   }
}


function validateForm() {
   if (counter != formStates.length) {
      alert(`You didn't see the whole menu!`);
      next();
      return false;
   } else {
      createObject();
   }
}

function createObject() {
   // alert(`Do you see me?`);
   // var allCheckedDrinks = document.querySelectorAll('input[name="drinks"]:checked');
   // var allCheckedAppetizers = document.querySelectorAll('input[name="appetizer"]:checked');
   // var drinks = '';
   // var appetizers = '';
   // for (let i = 0; i < allCheckedDrinks.length; i++) {
   //    drinks += `${allCheckedDrinks[i].defaultValue} `;
   // }
   // for (let i = 0; i < allCheckedAppetizers.length; i++) {
   //    appetizers += `${allCheckedAppetizers[i].defaultValue} `;
   // }
   // let orderObject = {
   //    last_name: document.querySelector("body > form > h1 > input[type=text]:nth-child(2)").value,
   //    room_number: document.querySelector("body > form > h1 > input[type=text]:nth-child(3)").value,
   //    drinks: drinks,
   //    appetizers: appetizers,
   //    entree: document.querySelectorAll('input[name="entree"]:checked')[0].value,
   //    dessert: document.querySelectorAll('input[name="dessert"]:checked')[0].value,
   //    special_requests: document.querySelector("body > form > input[type=text]:nth-child(16)").value
   // };
   // console.log(orderObject);
   return true;
}

document.querySelector('#next').addEventListener('click', next);
start();
