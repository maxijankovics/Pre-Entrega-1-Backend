import { Router } from "express";
import { ProductManager } from "../models/productManager.js";

const router = Router();
const productManager = new ProductManager();

router.get('/', async (req, res) => {
    try {
        const products = await productManager.getAll();
        res.send(products);

    } catch (error) {
        console.log(error);
    }
});

export default router;