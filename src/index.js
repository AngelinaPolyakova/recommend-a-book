import { Book } from './book'
import './styles/style.css'
import { isValid } from './utils'

const form = document.getElementById('form')
const author = form.querySelector('#author')
const title = form.querySelector('#title')
const submit = form.querySelector('#submit')
const showModal = document.getElementById('show')

title.addEventListener('input', function() {
    if (isValid(author.value)) {
        submit.disabled = false
    }
})

form.addEventListener('submit', handlerForm)

function handlerForm(event) {
    event.preventDefault();
    if (isValid(author.value) && isValid(title.value)) {
        
        const book = {
            author: author.value,
            title: title.value
        }

        Book.create(book).then(()=> {
            author.value = title.value = '';
            author.className = ''
            title.className = ''
            submit.disabled = true;
        })
    }
    
}

showModal.addEventListener('click', function (event) {
    event.preventDefault()

    return fetch('https://rec-a-book-aa674-default-rtdb.firebaseio.com/books.json')
            .then(response => {
                return response.json()
            })
            .then(response => {
                return response ? Object.keys(response).map( key=>({
                    ...response[key]
                })) : []
            }) 
            .then(response => createModal(Book.listOfBooks(response)))
})

export function createModal(content) {
    let modal = document.createElement('div')
    modal.classList.add('modal');
    modal.innerHTML = `
    <h1>Список книг</h1>
    <div class='modal-content'>${content}</div>
    `
    mui.overlay('on', modal);
}



    