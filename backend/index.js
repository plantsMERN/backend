const express = require("express");
const app = express();
const port = 3001;
const route = require("./routes/file");
const cors = require("cors");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// to allow all origins
app.use(cors());

// to allow only my fronten
// app.use(
//   cors({
//     origin: "http://localhost:3000", 
//   })
// );

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/data", route);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});