const Youtube = require("youtube-node");
const config = require("./configs.json");

const youtube =  new Youtube();
youtube.setKey(config.youtube.keyYoutube);

function searchVideoUrl (message, queryText ) {
  return new Promise((resolve, reject) => {
    console.log(queryText);
    youtube.search(`Exercicios em casa para ${queryText} `, 2, function(error, result){
      if(!error){
        const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
        const youtubeLinks = videoIds.map( videoId => `https://www.youtube.com/watch?v=${videoId}`)
        resolve(`${message} ${youtubeLinks.join(`, `)}`)
        
      }else{
        reject('Deu erro');
      }
    })
  })
}

module.exports.searchVideoUrl = searchVideoUrl
