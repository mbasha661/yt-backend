require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://rmahaboob48:72LukKfV0rIecFaS@bashaytc.ufj65ol.mongodb.net/?retryWrites=true&w=majority&appName=bashaytc`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB