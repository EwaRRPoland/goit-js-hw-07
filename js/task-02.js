// Wybieramy element o id "ingredients" z dokumentu HTML. Wynik jest zapisywany w zmiennej "ulList".
const ulList = document.getElementById('ingredients');

// Tworzymy tablicę składników.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Dla każdego składnika w tablicy wykonujemy następujące operacje.
ingredients.forEach(ingredient => {
  // Tworzymy nowy element "li" i zapisujemy go w zmiennej "liElement".
  const liElement = document.createElement("li");

  // Ustawiamy tekst elementu "li" na nazwę składnika.
  liElement.textContent = ingredient;

  // Dodajemy klasę "item" do elementu "li".
  liElement.classList.add("item");

  // Dodajemy element "li" do listy "ul".
  ulList.append(liElement);

});
