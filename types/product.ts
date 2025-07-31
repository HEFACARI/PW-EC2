export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    taste: string;
    origin: string;
    price: number;
    images: {
        id: number;
        url: string;
    }[];
    category: {
        slug: string;
        categoryName: string;
    };
};