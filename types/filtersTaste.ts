export type FilterTasteTypes = {
    result: ResultFiltersTasteType | null;
    loading: boolean;
    error: string;
}

export type ResultFiltersTasteType = {
    schema:{
        attributes: {
            taste: {
                enum: any
            }
        }
    }
        
}