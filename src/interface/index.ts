export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    year: number;
    genre: string;
    price: number;
    rating: number;
    quantity?: number;
}