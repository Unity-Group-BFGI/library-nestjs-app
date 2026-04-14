import { BookStatus } from "../models/library.model";

export class AddBookDto {
    "title": string;
    "description": string;
};

export class UpdateBookDto {
    "title": string;
    "description": string;
    "status": BookStatus;
}