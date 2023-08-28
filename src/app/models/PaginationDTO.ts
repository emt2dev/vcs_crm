export class PaginationDTO {
    public NewQP: string = "/?StartIndex=0&pagesize=15&PageNumber=1";
    public StartIndex: number;
    public PageSize: number;
    public PageNumber: number;
    /**
     *
     */
    constructor() {
        this.StartIndex = 0;
        this.PageSize = 15;
        this.PageNumber = 1;
    }

    GoForward() {
        this.StartIndex = this.StartIndex + 15;
        this.PageNumber = this.PageNumber + 1;
        return `/?StartIndex=${this.StartIndex}&pagesize=${this.PageSize}&PageNumber=${this.PageNumber}`;
    }

    GoBack() {
        this.StartIndex = this.StartIndex - 15;
        this.PageNumber = this.PageNumber - 1;

        if (this.StartIndex < 0 && this.PageNumber <= 1) {
            this.StartIndex = 0;
            this.PageSize = 15;
            this.PageNumber = 1;           
        }

        return `/?StartIndex=${this.StartIndex}&pagesize=${this.PageSize}&PageNumber=${this.PageNumber}`;
    }

    GetNew() {
        return `/?StartIndex=${this.StartIndex}&pagesize=${this.PageSize}&PageNumber=${this.PageNumber}`;
    }
}