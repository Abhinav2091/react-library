class BookModel {
    id: number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvailable?: string;
    category?: string; //? here is for optional value
    image?: string;

    constructor(id: number, title: string, author: string,
        description: string, copies: number, copiesAvailable: string,
        category: string, image: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.image = image;

    }
}

export default BookModel;