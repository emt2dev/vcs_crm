export class AddToCartDTO {
    /**
     *
     */
    constructor(public productId: number, public styleId: number) {
        this.productId = productId;
        this.styleId = styleId;
    }
}