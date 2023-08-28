export class ShippingOptionDTO {
    constructor
    (
        public id: number,
        public carrier: string,
        public name: string,
        public description: string,
        public flatRateCost: number,
        public weightCost: number,
        public totalCost: number,
        public totalWeight: number,
        public areaInInches: number,
        public deliveryExpectation: string,
        public availableWeight: number,
    )
    {
        this.id = id;
        this.carrier = carrier;
        this.name = name;
        this.description = description;
        this.flatRateCost = flatRateCost;
        this.weightCost = weightCost;
        this.totalCost = totalCost;
        this.totalWeight = totalWeight;
        this.areaInInches = areaInInches;
        this.deliveryExpectation = deliveryExpectation;
        this.availableWeight = availableWeight;
    }
}