import express from "express";
import productsRouter from "./routes/products.js";
import cartsRoutes from "./routes/carts.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRoutes);

// Puesta en marcha
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});