export class Book  {
    static create(book) {
        return fetch('https://rec-a-book-aa674-default-rtdb.firebaseio.com/books.json', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(response => response.json())
        .then(response => {
            book.title = response.title
            return book
        })
    }
    static listOfBooks(books) {
        return books.length ? `<ol>${books.map(b => `<li>${b.title}, ${b.author}</li>`).join('')}</ol>` : `<p>Рекомендованных книг пока нет</p>`
    }
    }
