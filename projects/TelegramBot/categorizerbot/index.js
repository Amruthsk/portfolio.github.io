require("dotenv").config();
const { Telegraf } = require("telegraf");

console.log("Token Status:", process.env.BOT_TOKEN ? "Loaded" : "FAILED/NULL");
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply(
    "Welcome to classifier Bot  Online. Send me some text to categorize"
  )
);

bot.launch();

console.log("Bot Listener is active and awaiting connection...");
