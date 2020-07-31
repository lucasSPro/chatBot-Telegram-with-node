const telegramBot = require('node-telegram-bot-api');
const configs = require("./configs.json");
const dialogFlow =  require('./dialogFlow');

const token = configs.Bot.key;

const bot =  new telegramBot(token, { polling: true});


bot.on('message', async function (message) {
  const chatID = message.chat.id;
  console.log(message.text);
  const ReceivedResponse = await dialogFlow.sendMessage(chatID.toString(), message.text)
  
  bot.sendMessage(chatID, ReceivedResponse.text);
} )