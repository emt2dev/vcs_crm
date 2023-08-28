import { CartDTO } from "./CartDTO";

export class OrderDTO {
    /**
     *
     */
    constructor(public id: number,
    public userId: string,
    public cart: CartDTO,
    public status: string,
    public hasBeenShipped: Boolean,
    public hasBeenPackaged: Boolean,
    public hasBeenDelivered: Boolean,
    public trackingInfo: string,
    public notes: string, ) {
        this.id = id;
        this.userId = userId;
        this.cart = cart;
        this.status = status;
        this.hasBeenShipped = hasBeenShipped;
        this.hasBeenPackaged = hasBeenPackaged;
        this.hasBeenDelivered = hasBeenDelivered;
        this.trackingInfo = trackingInfo;
        this.notes = notes;
    }

    
}