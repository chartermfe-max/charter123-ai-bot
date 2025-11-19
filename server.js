import express from "express";
import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.BOT_TOKEN;
const URL = process.env.RENDER_EXTERNAL_URL;

const app = express();
app.use(express.json());

// ایجاد ربات بدون polling
const bot = new TelegramBot(TOKEN);

// تنظیم وبهوک
bot.setWebHook(`${URL}/bot${TOKEN}`);

app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// پیام ساده برای تست
bot.on("message", msg => {
  bot.sendMessage(msg.chat.id, "ربات آنلاین و فعال است ✔️");
});

app.get("/", (req, res) => {
  res.send("Bot is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port", PORT));
