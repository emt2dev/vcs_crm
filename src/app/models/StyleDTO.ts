export class StyleDTO {
    /**
     *
     */
    constructor
    (
        public id: number,
        public productId: number,
        public name: string,
        public description: string,
        public price_Modifier: number,
        public weight: number,
        public imageUrls: Array<string>,
        public lengthInInches: number,
        public widthInInches: number,
        public depthInInches: number,
        public areaInInches: number
    )
    {
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.price_Modifier = price_Modifier;
        this.weight = weight;
        this.imageUrls = imageUrls;
        this.lengthInInches = lengthInInches;
        this.widthInInches = widthInInches;
        this.depthInInches = depthInInches;
        this.areaInInches = areaInInches;
    }
}