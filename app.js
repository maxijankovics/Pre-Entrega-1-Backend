import express from "express";

import productsRoutes from "./routes/products.js";
import cartsRoutes from "./routes/carts.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
})