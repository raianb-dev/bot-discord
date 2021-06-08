const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let embed = new Discord.MessageEmbed() 
    .setColor(`#d48415`) 
    .setTitle(`Precisando de ajuda?\n`)
    .setDescription("Prefixo :*`sa-`*\nComandos :*`ping`,    `help`,    `clear`,    `coinflip`,  `escrever`,     `uptime`,    `antiraid`,    `setnick`*.")
    await message.channel.send(embed); 

}