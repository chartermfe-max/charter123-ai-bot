import express from "express";
import TelegramBot from "node-telegram-bot-api";

const token = "7895342756:AAHG8ypCUj81Ye1SP7-_CKeVi2GKwnZNtJE";
const bot = new TelegramBot(token, { polling: true });

const app = express();

// پاسخ به /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "سلام ✨\nمن ربات هوشمند چارتر123 هستم.\nهر سوالی درباره پرواز، بلیط، قیمت‌ها یا مشاوره داری بپرس!"
  );
});

// پاسخ به پیام‌های عادی
bot.on("message", (msg) => {
  if (msg.text === "/start") return;
  bot.sendMessage(msg.chat.id, "پیامت رسید 👌 در حال پردازش هستم...");
});

// سرور برای Render
app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => console.log("Server running on port 3000"));
