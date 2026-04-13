export interface Book {
    _id?: string;
    status: BookStatus
}

enum BookStatus {
    PUBLISHED = 'publish',
    TRASH = 'trash',
    DRAFT = 'draft'
}