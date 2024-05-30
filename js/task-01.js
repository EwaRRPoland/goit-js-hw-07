// Pobieram listę (ul) o id 'categories'
const listWithId = document.querySelector('#categories');

// Pobieram wszystkie elementy li wewnątrz listWithId, które mają klasę 'item'
const ItemsByTagName = listWithId.querySelectorAll(".item");

// Wypisuję w konsoli ilość elementów li z klasy 'item' (czyli ilość kategorii)
console.log("Number of categories: " + ItemsByTagName.length);


//Wypisuję dzięki pętli forEach w konsoli tekst tytułu elementu (tagu <h2>)
//oraz liczbę elementów w kategorii(wszystkie < li >, w nim zagnieżdżone

ItemsByTagName.forEach(item => {

    const categoryLi = item.querySelector('h2').textContent;

    const elementsInCategory = item.querySelectorAll('ul li').length;

    console.log(`Category:${ categoryLi }`);

    console.log(`Elements:${ elementsInCategory }`);
});

