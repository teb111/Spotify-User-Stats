import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//load config
dotenv.config({});

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("This app is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on port 5000`));
