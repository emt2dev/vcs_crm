import { StyleDTO } from "./StyleDTO";

export class CartItemDTO {
    constructor(public id: number, public productId: number, public quantity: number, public name: string, public description: string, public purchase_price: number, public taxCode: string, public selectedStyle: StyleDTO) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.name = name;
        this.description = description;
        this.purchase_price = purchase_price;
        this.taxCode = taxCode;
        this.selectedStyle = selectedStyle;
    }
}