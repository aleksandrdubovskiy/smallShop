export interface Rating {
    rate: number;
    count: number;
}

export interface IProductItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface ICartInfo{
    isOpened: boolean,
    count: number
}