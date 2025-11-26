import {Product} from "../models/Product";

export function calculateDiscount(product: Product): number {
    if (!product.discountPercentage || product.discountPercentage <= 0) {
        return 0;
    }
    return product.price * (product.discountPercentage / 100);
}