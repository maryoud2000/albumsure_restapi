const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    username: {
      type: String,
    },
  });
  
  const Album = mongoose.model("Album", albumSchema);
  
  module.exports = Album;