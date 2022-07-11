const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');


guildid = "681797849926860810";

 client = new Client();

client.on('ready', async () => {
    


 const connection =   joinVoiceChannel({
        channelId: "994101821436067870",
        guildId: "681797849926860810",
        adapterCreator: client.guilds.cache.get(681797849926860810).voiceAdapterCreator,
});

connection.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} is ready!`);

});

    });



 
  
client.login(process.env.LOGIN);

 







