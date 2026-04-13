import { Controller, Get, HostParam, HttpCode, Param, Query, Redirect, Req, Res } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Book } from './library.model';

@Controller('library')
export class LibraryController {
    private libraryService: LibraryService;
    constructor(libraryService: LibraryService) {
        this.libraryService = libraryService;
    }

    @Get("/books")
    getBooks(): Book[] {
        return this.libraryService.getBooks();
    }
}
