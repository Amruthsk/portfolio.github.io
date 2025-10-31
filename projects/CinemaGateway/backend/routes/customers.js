const { Customer, validateCustomer } = require("../models/customer");

const mongoose = require("mongoose");

const express = require("express");

const customerRouter = express.Router();

customerRouter.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

customerRouter.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res.status(404).send("The customer with the given ID was not found");
  res.send(customer);
});

customerRouter.post("/", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let customer = new Customer({
    name: req.body.name,
    subscription: req.body.subscription,
    phone: req.body.phone,
  });

  customer = await customer.save();
  res.send(customer);
});

customerRouter.put("/:id", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      subscription: req.body.subscription,
      phone: req.body.phone,
    },
    { new: true }
  );

  if (!customer)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(customer);
});

customerRouter.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer)
    return res.status(404).send("The customer with the given ID was not found");
  res.send(customer);
});

module.exports = customerRouter;
