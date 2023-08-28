import { CartItemDTO } from "./CartItemDTO";


export class CartDTO {
    

    /**
     *
     */
    constructor(public id: number, public userEmail: string, public costInString: string, public cost: number, public cartItems: Array<CartItemDTO>, public discountRate: number, public submitted: Boolean, public abandoned: Boolean) {
        this.id = id;
        this.userEmail = userEmail;
        this.costInString = costInString;
        this.cost = cost;
        this.cartItems = cartItems;
        this.discountRate = discountRate;
        this.submitted = submitted;
        this.abandoned = abandoned;

    }
}