const dialogFlow = require('dialogflow');

const configs =  require("./dio-bot-si.json");

// creat a session

const sessionClient = new dialogFlow.SessionsClient({
  projectId: configs.project_id,
  credentials: {
    private_key: configs.private_key,
    client_email: configs.client_email,
  }
});

async function sendMessage(chatID, message){
  const sessionPath = sessionClient.sessionPath(configs.project_id, chatID);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'pt-BR',
      }
    }
  }

  const response =  await sessionClient.detectIntent(request)
  const result = response[0].queryResult;
  console.log(JSON.stringify(result, null, 2));
}

sendMessage('123456987', 'oi');