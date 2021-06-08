const Discord = require("discord.js");
const client = new Discord.Client();


exports.run = async (client, message, args) => {

client.guilds.fetch('guildID').then(guild => { 
    let role = guild.roles.everyone.id;
    // do something with id
})
  
  if (
    
    !message.member.permissions.has(r =>
      [
        "8200"
      ].includes(r.id) )) {
    return message.reply(" O comando `antiraid` é restrito.");
  } else if (message.content.includes("on")) {
    await role.setPermissions(67109889).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.reply(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await role.setPermissions(67111937).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
  }
};
