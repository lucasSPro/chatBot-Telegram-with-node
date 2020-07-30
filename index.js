const telegramBot = require('node-telegram-bot-api');

const token = '1150510350:AAEiLF4zEar2LcCCSIjgHiKpRYr1_OU2RX8';

const bot =  new telegramBot(token, { polling: true});


bot.on('message', function (message) {
  const chatID = message.chat.id;
  console.log(message.text);
  bot.sendMessage(chatID, 'Teste de menssagem');
} )