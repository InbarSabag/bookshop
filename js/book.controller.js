'use strict'

/****************************FUNCTIONS*******************************/

function onInit() {

    renderBooks()
}

// DONE:
function renderBooks() {
    var elBooksTable = document.querySelector('.booksTable tbody')
    var booksStrs = gBooks.map(book => {
        return (
            `<tr>
            <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price} &#8362;</td>
                <td><button class="readBtn" onclick="onReadBook('${book.id}')">Read</button>
                <button class="updateBtn" onclick="onUpdateBook('${book.id}')">Update</button>
                    <button class="deleteBtn" onclick="onRemoveBook('${book.id}')">Delete</button>
                    </td>
                    </tr>`)
    })
    elBooksTable.innerHTML = booksStrs.join('')
}

// DONE:
function onAddBook() {
    const bookName = prompt('Enter the book\'s name:')
    const bookPrice = prompt('Enter the book\'s price:')
    addBook(bookName, bookPrice)
    renderBooks()
}

// DONE:
function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}


// DONE:
function onUpdateBook(bookId) {
    const bookPrice = prompt('Enter the book\'s new price:')
    updateBook(bookId, bookPrice)
    renderBooks()
}

function onReadBook(bookId) {
    const bookIdx = readBook(bookId)
    renderBookModal(bookIdx)
    var elBookModal = document.querySelector('.book-modal')
    elBookModal.classList.remove('hide')
}

function closeBookModal() {
    var elBookModal = document.querySelector('.book-modal')
    elBookModal.classList.add('hide')
}

function renderBookModal(bookIdx) {
    const book = gBooks[bookIdx]
    document.querySelector('.book-img').innerHTML = `${book.imgUrl}`
    document.querySelector('.book-name').innerHTML = `${book.name}`
    document.querySelector('.book-price').innerHTML = `${book.price}`
    document.querySelector('.book-rate').setAttribute("value", `${book.rate}`)
    document.querySelector('.book-rate').setAttribute("id", `${book.id}`)
    document.querySelector('.book-id').innerHTML = `${book.id}`
    document.querySelector('.book-summary').innerHTML = `${book.summary}`
}

function onSetRate(bookId, rateValue) {
    if (rateValue >= 1 && rateValue <= 10) setRate(bookId, rateValue)
    else document.querySelector('.book-rate').setAttribute("value",'')
}