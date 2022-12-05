"use strict";
/* Vad ska vi göra här? */

const bookList = [
  {
    id: 1,
    author: "Charles Dickens",
    title: "Oliver Twist",
  },
  {
    id: 2,
    author: "William Shakespear",
    title: "Hamlet",
  },
];
/* const searchInput = document.children[0].children[1].children[1].children[1]; */
const searchField = document.getElementById("searchField");

/* keydown och keyup är det vi kan testa om vi vill filtrera listan så att den filtrerar när vi vi skriver in något i 
sökrutan (inte när vi lämnar eller klickar utan direkt när vi skriver)
Vi använder en anonym arrow funktion för att testa detta 
searchField.addEventListener("keyup", (e) => console.log(e.target.value));
*/

/* Nu när vi testat så sätter vi in handle keypress och gör om vår handlekeypress */

searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
  /*  Ta emot/läsa av värdet i inputfältet
        Skicka värdet till searchBooks
        searchBooks returnerar en filtrerad lista
        Filtrerade listan skickas till renderBookList som ritar ut listan
        Egen notering: handleKeyPress använder searchBooks och returnerar en lista.
    */
  searchBooks(e.target.value);
}

function searchBooks(searchTerm) {
  /*  Loopa igenom bookList
        För varje varv i loopen, ta det aktuella elementet (boken)
        Jämför titeln med söktermen
        Om söktermen finns någonstans i titeln, lägg till elementet i en ny lista (fileredList)
        Returnerar fileredList eller anropar renderBookList?
    */
  const filteredList = [];
  for (let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i]);
    }
  }
  renderBookList(filteredList);
}
/* Denna bookList är ej samma som den ovan, denna fungerar endast i denna funktion och krockar ej med den andra */

function renderBookList(bookList) {
  /* Element i HTML-listan visas/döljs beroende på listans innehåll.  */
    

    const existingElement = document.querySelector('.book-list');
    console.log(existingElement);

    const root = document.getElementById("root"); 
    if (existingElement) {
        root.removeChild(existingElement);
    }
    if (bookList.length > 0){
        root.insertAdjacentHTML('beforeend', BookList(bookList));
    }
}
