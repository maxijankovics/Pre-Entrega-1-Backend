import { Router } from "express";
import { CartManager } from "../models/cartManager.js";
import { ProductManager } from "../models/productManager.js";

const router = Router();

const cartManager = new CartManager();
const productManager = new ProductManager();

router.post("/", async (req, res) => {
    
    try {
        
        const cart = await cartManager.createCart();
        res.send(cart);

    } catch (error) {
        
        console.log(error);
        res.send(error.message);

    }
});

router.get("/:cid", async (req, res) => {

    const { cid } = req.params;

    try {
        
        const cart = await cartManager.getCartById(cid);
        res.send(cart);

    } catch (error) {
        
        console.log(error);
        res.send(error.message);

    }
});

router.post("/:cid/product/:pid", async (req, res) => {

    const { cid, pid } = req.params;

    try {
        
        const product = await productManager.getProductById(pid);
        if (!product) throw new Error(`No se pudo encontrar un producto con el id ${pid}`);
        const cart = await cartManager.addProductToCart(cid, pid);
        res.send(cart);

    } catch (error) {
        
        console.log(error);
        res.send(error.message);

    }

})

export default router;