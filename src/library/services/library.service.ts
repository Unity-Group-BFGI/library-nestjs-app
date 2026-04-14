import { Injectable } from '@nestjs/common';
import { Book, BookStatus, RemoveBook, UpdateBookResponse } from '../models/library.model';
import { AddBookDto, UpdateBookDto } from '../dto/library.dto';

@Injectable()
export class LibraryService {
    private books: Book[] = [];
    
    public getBooks(): Book[] {
        return this.books;
    }

    public getBookById(id: string): Book | undefined {
        return this.books.find((book: Book) => book._id === id)
    }

    public addBook(book: AddBookDto): Book {
        const { title, description } = book;
        const newBook: Book = {
            _id: String(Math.random()),
            title,
            description,
            status: BookStatus.DRAFT
        };
        this.books.push(newBook);
        return newBook;
    }

    public removeBookById(id: string): RemoveBook {
        this.books = this.books.filter((book: Book) => book._id !== id);
        const bookFound = this.books.find((book: Book) => book._id === id);
        return {
            _id: id,
            deleted: bookFound? false : true
        }
    }

    public updateBookById(id: string, updateBook: UpdateBookDto): UpdateBookResponse {
        let oldBook: Book | undefined = this.getBookById(id);
        if(oldBook) {
            Object.assign(oldBook, updateBook);
            return {
                book: oldBook,
                _id: id,
                updated: true
            }
        } else {
            return {
                updated: false,
                _id: id,
                book: null
            }
        }
    }

    public updateBookByIdTest(id: string, updateBook: UpdateBookDto): UpdateBookResponse {
        const { title, status, description }: Book = updateBook;
        const oldBook: Book | undefined = this.getBookById(id);
        if(oldBook){
            oldBook.status = status;
            return {
                book: oldBook,
                _id: id,
                updated: true
            }
        } else {
            return {
                book: null,
                _id: id,
                updated: false
            }
        }
    }

    // Correct solution:
    // Your original method only updates the local variable `oldBook`.
    // It does not update the object stored inside `this.books`.
    // public updateBookById(id: string, updateBook: UpdateBookDto): UpdateBookResponse {
    //     const oldBook: Book | undefined = this.getBookById(id);
    //
    //     if(oldBook) {
    //         Object.assign(oldBook, updateBook);
    //
    //         return {
    //             book: oldBook,
    //             _id: id,
    //             updated: true
    //         }
    //     } else {
    //         return {
    //             updated: false,
    //             _id: id,
    //             book: null
    //         }
    //     }
    // }
}
