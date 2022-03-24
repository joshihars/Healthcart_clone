const express = require("express");

const cors = require("cors");

const connect =require("./config/db");

const productController = require("./controlers/product.controler");
const cartController = require("./controlers/cart.controller");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/product", productController )
app.use("/cart", cartController)

const port = 4500;
//---------------------------SERVER-----------------------
app.listen(port, async function(){
    try {
        await connect();
        console.log(`listing at port no ${port}`)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})

