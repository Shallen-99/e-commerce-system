import { fetchAllProducts, fetchProductById } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function main() {
    try {
        console.log("Fetching all products...\n");

        const products = await fetchAllProducts();

        console.log(`Loaded ${products.length} products!\n`);

        products.slice(0, 5).forEach(product => {
            console.log(product.displayDetails());

            const discount = calculateDiscount(product);
            const tax = calculateTax(product);

            console.log(`   Discount: $${discount.toFixed(2)}`);
            console.log(`   Tax: $${tax.toFixed(2)}`);
            console.log("-----------------------------");
        });

        console.log("\n Fetching product #1...\n");

        const product = await fetchProductById(1);

        console.log(product.displayDetails());
        console.log(`Discount: $${calculateDiscount(product).toFixed(2)}`);
        console.log(`Tax: $${calculateTax(product).toFixed(2)}`);

    } catch (error) {
        handleError(error);
    }
}

main();