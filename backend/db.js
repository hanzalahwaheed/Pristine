const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");

    mongoose.connection.once("open", async () => {
      const fetched_user_data = await mongoose.connection.db
        .collection("users")
        .find()
        .toArray();
      global.user_data = fetched_user_data;

      const fetched_place_data = await mongoose.connection.db
        .collection("places")
        .find()
        .toArray();
      global.placed_data = fetched_place_data;
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
