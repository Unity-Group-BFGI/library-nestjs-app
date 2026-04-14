import { Injectable } from '@nestjs/common';
import { Book, BookStatus } from '../models/library.model';
import { AddBookDto } from '../dto/library.dto';

@Injectable()
export class LibraryService {
    private books: Book[] = [];
    
    public getBooks(): Book[] {
        return this.books;
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
}
