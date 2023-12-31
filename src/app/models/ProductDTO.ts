import { StyleDTO } from "./StyleDTO";


export class ProductDTO {
    constructor
    (
        public id: number,
        public quantity: number,
        public name: string,
        public description: string,
        public keywords: string,
        public isOnSale: Boolean,
        public current_Price: number,
        public sale_Price_Modifier: number,
        public taxCode: string,
        public styles: Array<StyleDTO>,
        public categoryName: string,
        public isPopular: Boolean,
        public isComingSoon: Boolean,
        public isAvailableForOrder: Boolean,
        public isNew: Boolean,
        public imageUrl: string, 
    )
    {
        this.id = id;
        this.quantity = quantity;
        this.name = name;
        this.description = description;
        this.keywords = keywords;
        this.isOnSale = isOnSale;
        this.current_Price = current_Price;
        this.sale_Price_Modifier = sale_Price_Modifier;
        this.taxCode = taxCode;

        this.styles = styles;

        this.categoryName = categoryName;


        this.isPopular = isPopular;
        this.isComingSoon = isComingSoon;
        this.isAvailableForOrder = isAvailableForOrder;
        this.isNew = isNew;

        this.imageUrl = imageUrl;
    }
}