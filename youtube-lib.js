const Youtube = require("youtube-node");
const config = require("./configs.json");

const youtube =  new Youtube();
youtube.setKey(config.youtube.keyYoutube);

youtube.search("Exercicios en casa para abdome", 2, function(error, result){
  if(!error){
    console.log(JSON.stringify(result, null, 2));
  }else{
    console.log("deu erro");
  }
})