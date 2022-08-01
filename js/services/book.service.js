'use strict'

var gBooks = []
_createBooks()
_saveBooksToStorage()

/****************************FUNCTIONS*******************************/

function addBook(name, price) {
    const book = {
        id: makeId(),
        name,
        price,
        imgUrl: `<img class="img" src="img/${getRandomIntInclusive(1, 4)}.png">`,
        rate: 5,
        summary: makeLorem(30) 
    }
    gBooks.push(book)
    _saveBooksToStorage()
}

function updateBook(bookId, bookPrice) {
    gBooks[_findBookIdx(bookId)].price = +bookPrice 
    _saveBooksToStorage()
}

function removeBook(bookId) {
    gBooks.splice((bookId), 1)
    _saveBooksToStorage()
}

function readBook(bookId){
    return _findBookIdx(bookId)
}

function setRate(bookId, rateValue){
    gBooks[_findBookIdx(bookId)].rate = +rateValue
    _saveBooksToStorage()
}

/************************Internal functions***************************/

function _createBooks() {
    if (_loadBooksFromStorage()) gBooks = _loadBooksFromStorage()
    else {
        addBook('Story of five balloons', 55)
        addBook('The very hungry caterpillar', 35)
        addBook('Monkey puzzle', 40)
        addBook('The gruffalo', 45)
        _saveBooksToStorage()
        }
    }

    function _findBookIdx(bookId) {
        return gBooks.findIndex(book => book.id === bookId)
    }

    function _saveBooksToStorage() {
        saveToStorage('booksDB', gBooks)
    }

    function _loadBooksFromStorage() {
        return loadFromStorage('booksDB')
    }