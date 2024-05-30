# goit-js-hw-07
homework : DOM
Zadanie 1

HTML zawiera listę kategorii ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>



Napisz skrypt, który:

Policzy i wyświetli w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wyświetli w konsoli tekst tytułu elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkie <li>, w nim zagnieżdżone).


W rezultacie w konsoli zostaną wyświetlone następujące komunikaty:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5



Zadanie 2

HTML zawiera pustą listę ul#ingredients.

<ul id="ingredients"></ul>



JavaScript zawiera tablicę ciągów znaków.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



Napisz skrypt, który dla każdego elementu tablicy ingredients:

Utworzy oddzielny element <li>. Pamiętaj, aby użyć metody document.createElement().
Doda nazwę składnika jako jego zawartość tekstową.
Doda klasę item do elementu.
Wstawi wszystkie <li> w jednej operacji do listy ul#ingredients.


Zadanie 3

Napisz skrypt tworzący galerię obrazów na podstawie zestawu danych. Kod HTML zawiera listę ul.gallery.



<ul class="gallery"></ul>



Użyj tablicy obiektów images, aby utworzyć elementy <img>, zagnieżdżone w <li>. Użyj łańcuchów szablonów i metody insertAdjacentHTML(), aby utworzyć znaczniki.

Wszystki elementy galerii powinny zostać dodane do DOM w jednej operacji dodawania.
Minimalnie zaprojektuj galerię za pomocą flexbox lub elementów siatki poprzez klasy CSS.


const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];



Kryteria akceptacji

Utworzono repozytorium goit-js-hw-07.
Zadanie domowe zawiera dwa linki: do plików źródłowych і strony roboczej na GitHub Pages.
Zadania zostały wykonane zgodnie z zadaniem technicznym (zmiana źródłowego kodu HTML zadania jest zabroniona).
W konsoli podczas otwierania aktywnej strony zadania nie występują błędy ani ostrzeżenia.
Nazwy zmiennych i funkcji są jasne i opisowe.
Kod jest sformatowany przy użyciu Prettier.


Pliki startowe

Pobierz pliki startowe z gotowymi znacznikami i połączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu.
