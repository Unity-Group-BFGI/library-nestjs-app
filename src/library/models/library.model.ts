export interface Book {
    _id?: string;
    title: string;
    description: string;
    status: BookStatus
}

export enum BookStatus {
    PUBLISHED = 'publish',
    TRASH = 'trash',
    DRAFT = 'draft'
}