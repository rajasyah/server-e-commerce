const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const tagSchema = Schema({
  name: {
    type: String,
    minLength: [3, "Nama kategori minimal 3 karakter"],
    maxLength: [20, "Nama kategori maksimal 20 karakter"],
    required: [true, "nama kategori harus diisi"],
  },
});

module.exports = model("Tag", tagSchema);
