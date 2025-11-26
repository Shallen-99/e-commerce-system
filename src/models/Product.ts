export class Product {
        constructor(
        public id: number,
        public title: string,
        public category: string,
        public price: number,
        public discountPercentage: number = 0
    ) {}

    displayDetails(): string {
        return `Product: ${this.title} (ID: ${this.id}) $${this.price.toFixed(2)}`;
    }

    getPriceWithDiscount(): number {
        const discountAmount = this.price * (this.discountPercentage/100);
        return this.price - discountAmount;
    }
}