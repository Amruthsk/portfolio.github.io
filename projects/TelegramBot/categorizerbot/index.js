require("dotenv").config();
const { Telegraf } = require("telegraf");
const categorizedData = new Map();
const categorizationRules = require("./rules");



console.log("Token Status:", process.env.BOT_TOKEN ? "Loaded" : "FAILED/NULL");



const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Welcome to classifier Bot Online. Send me some text to categorize"
  );
});



bot.command("report", (ctx) => {
  let reportMessage = "--- CLASSIFICATION SUMMARY ---\n\n";

  if (categorizedData.size === 0) {
    reportMessage += "No categorized messages in memory.";
  } else {
    for (const [tag, messages] of categorizedData.entries()) {
      reportMessage += `📊 ${tag}: ${messages.length} total messages\n`;
    }
  }

  ctx.reply(reportMessage);
});



bot.on("text", (ctx) => {
  const message = ctx.message.text;
  if (message.startsWith('/')) {
     return; 
  }
  let tag = "Uncategorized"; 
  for (const [key, patterns] of Object.entries(categorizationRules)) {
    if (patterns.some((pattern) => pattern.test(message))) {
      tag = key; 
      break; 
    }
  }

  ctx.reply(`[${tag}] Tag assigned to: "${message.substring(0, 30)}..."`);


  if (!categorizedData.has(tag)) {
    categorizedData.set(tag, []);
  }
  categorizedData.get(tag).push({
    text: message,
    from: ctx.from.username || ctx.from.first_name, // Store context for the report
    date: new Date(),
  });

   ctx.reply(`Message tagged as [${tag}] and logged.`);
});











bot.launch();
console.log("Bot Listener is active and awaiting connection...");
