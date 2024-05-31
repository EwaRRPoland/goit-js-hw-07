
// Wybieramy pierwszy element o klasie "gallery" z dokumentu HTML. Wynik jest zapisywany w zmiennej "galleryUl".
const galleryUl = document.getElementsByClassName('gallery')[0];

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Tworzymy łańcuch HTML dla wszystkich obrazów.
let imagesHTML = '';
images.forEach(image => {
  imagesHTML += `
    <li class="item">
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
});

// Dodajemy cały HTML do listy "ul" za pomocą metody "insertAdjacentHTML".
galleryUl.insertAdjacentHTML('beforeend', imagesHTML);
