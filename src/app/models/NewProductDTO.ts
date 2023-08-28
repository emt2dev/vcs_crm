export class NewProductDTO {
    /**
     *
     */
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
        public styleId: number,
        public categoryDescription: string,
        public categoryKindOf: string,
        public categoryName: string,
        public isPopular: Boolean,
        public isComingSoon: Boolean,
        public isAvailableForOrder: Boolean,
        public isNew: Boolean,
        public productImage: File, 
        public styleName: string,
        public styleDescription: string,
        public stylePrice_Modifier: number,
        public styleImageUrls: Array<File>,
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
        this.styleId = styleId;
        this.categoryDescription = categoryDescription;
        this.categoryKindOf = categoryKindOf;
        this.categoryName = categoryName;
        this.isPopular = isPopular;
        this.isComingSoon = isComingSoon;
        this.isAvailableForOrder = isAvailableForOrder;
        this.isNew = isNew;
        this.styleName = styleName;
        this.styleDescription = styleDescription;
        this.stylePrice_Modifier = stylePrice_Modifier;
        this.styleImageUrls = styleImageUrls;
    }
}