const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require("morgan");

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use('/api/details', require('./routes/api/details'));


app.get('/', (req, res) => {
  res.send('hello');
});

const port = process.env.PORT || 1000;

app.listen(
  port,
  console.log(`server is running in ${process.env.NODE_ENV} on port ${port}`)
);
