export class Product {
        constructor(
        public id: number,
        public title: string,
        public category: string,
        public price: number
    ) {}

    displayDetails(): string {
        return `Product: ${this.title} (ID: ${this.id}) - $${this.price.toFixed(2)}`;
    }

    getPriceWithDiscount(): number {
        return this.price;
    }
}