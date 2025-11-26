import {Product} from "../models/Product"
import { appError } from "../utils/errorHandler"

const BASE_URL = "https://dummyjson.com/products";

export async function fetchAllProducts(): Promise <Product[]> {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new appError(`Failed to fetch products`, response.status);
        }
        const data = await response.json();

        return data.products.map((item: any) => 
            new Product (
                item.id,
                item.title,
                item.category,
                item.price,
            )
        )
    } catch (error) {
        if (error instanceof appError) throw error;
        throw new appError("Network error while fetching products", 500, error);
    }
}

export async function fetchProductById(id: number): Promise<Product> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new appError(
                `Product with ID ${id} not found`,
                response.status
            );
        }

        const item = await response.json();

        return new Product(
            item.id,
            item.title,
            item.category,
            item.price
        );

    } catch (error) {
        if (error instanceof appError) throw error;

        throw new appError(
            `Network error while fetching product ${id}`,
            500,
            error
        );
    }
}