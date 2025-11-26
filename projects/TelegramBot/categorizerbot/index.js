require("dotenv").config();
const { Telegraf } = require("telegraf");
const categorizationRules = require("./rules");



console.log("Token Status:", process.env.BOT_TOKEN ? "Loaded" : "FAILED/NULL");



const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Welcome to classifier Bot Online. Send me some text to categorize"
  );
});

bot.on("text", (ctx) => {
  const message = ctx.message.text;
  let tag = "Uncategorized"; 
  for (const [key, patterns] of Object.entries(categorizationRules)) {
    if (patterns.some((pattern) => pattern.test(message))) {
      tag = key; 
      break; 
    }
  }

  ctx.reply(`[${tag}] Tag assigned to: "${message.substring(0, 30)}..."`);
});

bot.launch();
console.log("Bot Listener is active and awaiting connection...");
