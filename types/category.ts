export type CategoryType = {
    id: number;
    categoryName: string;
    slug: string;
    mainImage:{
        formats: {
            thumbnail: {
                url: string;
            };
        };        
    };

    
}