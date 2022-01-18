const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, "Nama makanan minimal 3 karakter"],
      required: [true, "nama makanan harus diisi"],
    },

    description: {
      type: String,
      maxLength: [1000, "panjang descripsi maximal 1000 karakter"],
    },

    price: {
      type: Number,
      default: 0,
    },

    image_url: String,
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
