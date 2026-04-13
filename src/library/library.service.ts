import { Injectable } from '@nestjs/common';
import { Book } from './library.model';

@Injectable()
export class LibraryService {
    private books: Book[] = [];
    
    public getBooks(): Book[] {
        return this.books;
    }
}
