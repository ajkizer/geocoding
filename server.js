const express = require("express");
const dotenv = require('dotenv')
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const cors = require('cors')
const morgan = require('morgan')
const errorHandler = require("./middleware/error");

const router = express.Router();




dotenv.config({path: "./config/config.env"});


const app = express();

app.use(express.json());

app.use(helmet());

// rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000,
  });

  app.use(limiter);

  app.use(cors());

const geocoding = require('./routes/geocoding');
const weather = require("./routes/weather")
app.use("/api/v1/locations", geocoding)
app.use("/api/v1/weather", weather)




const PORT = process.env.PORT || 5000;

  //dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(errorHandler);

  const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  );

  
process.on("unHandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
  
    server.close(() => process.exit(1));
  });





module.exports = router;