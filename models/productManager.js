import fs from "fs";

export class ProductManager {
    
    constructor() {
        this.products = [];
        this.path = "../data/products.json";
    }

    async getAll(limit) {
        const file = await fs.promises.readFile(this.path, "utf-8");
        const fileParse = JSON.parse(file);

        this.products = fileParse || [];

        if (!limit) return this.products;

        return this.products.slice(0, limit);
    }

}