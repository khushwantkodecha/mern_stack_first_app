const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/api");
// const cors = require("cors");

const app = express();
const PORT = 7065 || process.env.PORT;

// const MONGODB_URI =  "mongodb+srv://khushwantkodecha:khushwantkodecha@mernfirst-tzm5u.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern_first", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("MONGOOSE CONNECTED!!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HTTP request logger(it consoles https requests)
app.use(morgan("tiny"));

// app.use(cors());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('mern_first/build'))
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
