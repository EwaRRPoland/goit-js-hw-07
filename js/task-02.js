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

// Tworzymy nowy fragment dokumentu i zapisujemy go w zmiennej "docFragment".
const docFragment = document.createDocumentFragment();

// Dla każdego składnika w tablicy wykonujemy następujące operacje.
ingredients.forEach(ingredient => {
  // Tworzymy nowy element "li" i zapisujemy go w zmiennej "liElement".
  const liElement = document.createElement("li");

  // Ustawiamy tekst elementu "li" na nazwę składnika.
  liElement.textContent = ingredient;

  // Dodajemy klasę "item" do elementu "li".
  liElement.classList.add("item");

  // Dodajemy element "li" do fragmentu dokumentu.
  docFragment.appendChild(liElement);
});

// Dodajemy fragment dokumentu do listy "ul".
ulList.appendChild(docFragment);
