export class CategoryDTO {
    /**
     *
     */
    constructor(public id: number, public name: string, public description: string, public kindOf: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.kindOf = kindOf;
    }
}