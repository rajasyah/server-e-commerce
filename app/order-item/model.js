const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const orderItemSchema = Schema({
  name: {
    type: String,
    minLength: [5, "Nama makanan minimal 5 karakter"],
    required: [true, "nama makanan harus diisi"],
  },

  price: {
    type: Number,
    required: [true, "Harga item harus diisi"],
  },

  qty: {
    type: Number,
    required: [true, "Kuantitas harus diisi"],
    min: [1, "Kuantitas minimal 1"],
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});

module.exports = model("OrderItem", orderItemSchema);
