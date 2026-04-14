import { Body, Controller, Delete, Get, HostParam, HttpCode, Param, Patch, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { LibraryService } from '../services/library.service';
import type { Book, RemoveBook, UpdateBookResponse } from '../models/library.model';
import { AddBookDto, BooksByFiltersDto, UpdateBookDto } from '../dto/library.dto';

@Controller('library')
export class LibraryController {
    private libraryService: LibraryService;
    constructor(libraryService: LibraryService) {
        this.libraryService = libraryService;
    }

    @Get("/books")
    getBooks(@Query() bookByFilters: BooksByFiltersDto): Book[] {
        if(Object.keys(bookByFilters).length > 0){
            return this.libraryService.getBooksByFilters(bookByFilters);
        } else {
            return this.libraryService.getBooks();
        }
    }

    @Post("/book/add")
    addBook(@Body() addBookDto: AddBookDto): Book {
        return this.libraryService.addBook(addBookDto);
    }

    @Get("/book/:id")
    getBookById(@Param("id") id: string): Book | undefined {
        return this.libraryService.getBookById(id);
    }

    @Delete("/book/remove/:id")
    removeBookById(@Param('id') id: string): RemoveBook {
        return this.libraryService.removeBookById(id);
    }

    @Patch("/book/update/:id")
    updateBookById(@Param('id') id: string, @Body() updateBook: UpdateBookDto): UpdateBookResponse {
        return this.libraryService.updateBookById(id, updateBook);
    }


}
