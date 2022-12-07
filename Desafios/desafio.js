class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

let bookInfo = (id, book) => ({
    id: id,
    book: book
});

class Library {
    
    books = [];

    addBook(bookInfo) {
        this.books.push(bookInfo)
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        for(var book in this.books) {
            if(this.books[book].id == id) {
                delete this.books[book];
                break;
            }
        }
    }

    getBookById(id) {
        for(var book in this.books) {
            if(this.books[book].id == id) {
                return this.books[book];
            }
        }
    }

    updateBookById(id, book_info) {
        for(var book in this.books) {
            if(this.books[book].id == id) {
                if (book_info.title) {
                    this.books[book].book.title = book_info.title;
                }
                if (book_info.description) {
                    this.books[book].book.description = book_info.description;
                }
                if (book_info.author) {
                    this.books[book].book.author = book_info.author;
                }
            }
        }
    }

}