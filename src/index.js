require("dotenv").config();
process.env["NTBA_FIX_319"] = 1;
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const { handleError, ErrorHandler } = require("./helpers/error");
const config = require("./config/config");

const botConfig = config.api.production
  ? config.telegramBotProd
  : config.telegramBotDev;

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(botConfig.token, { polling: true });

const port = config.api.port;

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan(":method :url :response-time"));
// app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes({ bot }));

// Not Found
app.use((request, response, next) => {
  throw new ErrorHandler(404, "Not Found");
});

// Catch All
app.use((error, request, response, next) => {
  handleError(error, response);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
