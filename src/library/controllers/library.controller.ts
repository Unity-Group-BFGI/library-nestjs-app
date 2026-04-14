import { Body, Controller, Get, HostParam, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { LibraryService } from '../services/library.service';
import type { Book } from '../models/library.model';
import { AddBookDto } from '../dto/library.dto';

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

    @Post("/book/add")
    addBook(@Body() addBookDto: AddBookDto): Book {
        return this.libraryService.addBook(addBookDto);
    }

    @Get("/book/:id")
    getBookById(@Param("id") id: string): Book | undefined {
        return this.libraryService.getBookById(id);
    }
}
