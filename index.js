const telegramBot = require('node-telegram-bot-api');
const configs = require("./configs.json");
const dialogFlow =  require('./dialogFlow');
const youtube = require('./youtube-lib');

const token = configs.Bot.key;

const bot =  new telegramBot(token, { polling: true});


bot.on('message', async function (message) {
  const chatID = message.chat.id;
  console.log(message.text);
  const ReceivedResponse = await dialogFlow.sendMessage(chatID.toString(), message.text)
  
  let responseText = ReceivedResponse.text;

  if(ReceivedResponse.intent === 'Exercício específico'){
    responseText = await youtube.searchVideoUrl(responseText, ReceivedResponse.fields.corpo.stringValue)
  }
  bot.sendMessage(chatID, responseText);
} )