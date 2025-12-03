// routes/v1.routes.js
const express = require("express");
const homePingController = require("../../controllers/ping.controller");
const {
  productGetByIdController,
  productCreateController,
  categoryGetByIdController,
} = require("../../controllers/resource.controller");

const v1Router = express.Router();
// Register the controller function to a specific path on the router
v1Router.get("/ping", homePingController);

v1Router.get("/products/:id", productGetByIdController);
v1Router.post("/products", productCreateController);
v1Router.get("/category/:id", categoryGetByIdController);

module.exports = v1Router;
