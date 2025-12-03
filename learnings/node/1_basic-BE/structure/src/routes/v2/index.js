// routes/v1.routes.js
const express = require("express");
const homePingController = require("../../controllers/ping.controller");
const {
  productGetByIdController,
  categoryGetByIdController,
  userGetByIdController,
} = require("../../controllers/resource.controller");

const v2Router = express.Router();
// Register the controller function to a specific path on the router
v2Router.get("/check", homePingController);
v2Router.get("/products/:id", productGetByIdController);
v2Router.get("/categories/:id", categoryGetByIdController);
v2Router.get("/users/:id", userGetByIdController);

module.exports = v2Router;
