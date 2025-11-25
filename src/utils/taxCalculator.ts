//Apply a default standard tax rate of 4.75% to each product; 
// however, products with a category of “groceries” should only
//  be taxed at 3%.
import {Product} from "../models/Product";

export function calculateTax(product: Product): any {
    if (product.category === "groceries") {
        product.price * 0.03
    } else {
        product.price * 0.0475
    } 
}