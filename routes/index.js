const express = require("express");

const categoriesRouter = require("./categories");
const productsRouter = require("./products");

const router = express.Router();

router.use("./categories", categoriesRouter);
router.use("./products", productsRouter);

module.exports = router;