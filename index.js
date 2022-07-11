const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');


guildid = "681797849926860810";

 client = new Client();
 client1 = new Client();
 client2 = new Client();
 client3 = new Client();
 client4 = new Client();
 client5 = new Client();
 client6 = new Client();
 client7 = new Client();
 client8 = new Client();
 client9 = new Client();
 client10 = new Client();

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
client1.login(process.env.LOGIN1);
client2.login(process.env.LOGIN2);
client3.login(process.env.LOGIN3);
client4.login(process.env.LOGIN4);
client5.login(process.env.LOGIN5);
client6.login(process.env.LOGIN6);
client7.login(process.env.LOGIN7);
client8.login(process.env.LOGIN8);
client9.login(process.env.LOGIN9);
client10.login(process.env.LOGIN10);

 







