export const serviceSearch = {
    getBooks
}

function getBooks(bookName) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`)
        .then(res => getBookAttribute(res.data.items))
        .catch(err => console.log(err))
}


    function getBookAttribute(books){
         const booksData =  books.map(book  => {
           return {
            "id":'',
            "title": book.volumeInfo.title.substring(0,20), 
            "subtitle": book.volumeInfo.subtitle,
            "authors": [
            "Eran"
            ],
            "publishedDate":book.volumeInfo.pageCount,
            
            "description": book.volumeInfo.title,
            "pageCount":  book.volumeInfo.pageCount,
            "categories": [
            "Computers",
            "Hack"
            ],
            "thumbnail": book.volumeInfo.imageLinks.thumbnail,
            "language": "en",
            "listPrice": {
            "amount": 100,
            "currencyCode": "EUR",
            "isOnSale": false
            }

            }
        })
        return booksData
    }


  