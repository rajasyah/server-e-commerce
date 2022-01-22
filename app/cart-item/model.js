const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const cartItemSchema = Schema({
  name: {
    type: String,
    minLength: [5, "Nama makanan minimal 5 karakter"],
    required: [true, "nama makanan harus diisi"],
  },

  qty: {
    type: Number,
    min: [1, "minimal qty adalah 1"],
    required: [true, "Qty harus diisi"],
  },

  price: {
    type: Number,
    default: 0,
  },

  image_url: String,

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

module.exports = model("CartItem", cartItemSchema);
