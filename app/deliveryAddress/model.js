const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const deliveryAddressSchema = Schema(
  {
    name: {
      type: String,
      maxLength: [255, "Nama alamat maksimal 255 karakter"],
      required: [true, "nama alamat harus diisi"],
    },

    kelurahan: {
      type: String,
      maxLength: [255, "panjang kelurahan maksimal 255 karakter"],
      required: [true, "nama kelurahan harus diisi"],
    },
    kecamatan: {
      type: String,
      maxLength: [255, "panjang kecamatan maksimal 255 karakter"],
      required: [true, "nama kecamatan harus diisi"],
    },
    kabupaten: {
      type: String,
      maxLength: [255, "panjang kabupaten maksimal 255 karakter"],
      required: [true, "nama kabupaten harus diisi"],
    },
    provinsi: {
      type: String,
      maxLength: [255, "panjang provinsi maksimal 255 karakter"],
      required: [true, "nama provinsi harus diisi"],
    },
    detail: {
      type: String,
      maxLength: [1000, "panjang detail maksimal 1000 karakter"],
      required: [true, "detail alamat harus diisi"],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("DeliveryAddress", deliveryAddressSchema);
