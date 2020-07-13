const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      'mongodb+srv://gonaver:cse@cluster0.9slz8.mongodb.net/webchat?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log(`Connection Failed`, err);
        } else {
          console.log(`Connection success`);
        }
      }
    );
  };
  
  connect();

  mongoose.connection.on("error", (err) => {
    console.error("Mongo DB connection error", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("Mongo DB Connection is disconnected.\nConnection Retry...");
    connect();
  });
};
