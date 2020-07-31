const dialogFlow = require('dialogflow');

const configs =  require("./configs.json");

// creat a session

const sessionClient = new dialogFlow.SessionsClient({
  projectId: configs.dialogFlow.project_id,
  credentials: {
    private_key: configs.dialogFlow.private_key,
    client_email: configs.dialogFlow.client_email,
  }
});

async function sendMessage(chatID, message){
  const sessionPath = sessionClient.sessionPath(configs.dialogFlow.project_id, chatID);
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
  return {
    text: result.fulfillmentText,
    intent: result.intent.displayName,
    fields: result.parameters.fields,
  }
}

module.exports.sendMessage =  sendMessage;