import { Injectable } from '@nestjs/common';
import { Book, BookStatus, RemoveBook } from '../models/library.model';
import { AddBookDto } from '../dto/library.dto';

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
}
