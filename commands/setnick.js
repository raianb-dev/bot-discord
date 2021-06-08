const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args, discord) => {
  //if (message.author.id == `${config.dono}`) return message.reply("você esta na blacklist.");
  //if (message.author.id !== "647895753158557696") return message.reply("<:errado:623587937115832351> Você não possui permissão para isto.");
  //if (message.author.id !== "648650944849903666") return message.reply("<:errado:623587937115832351> Você não possui permissão para isto.");
  let newname = args.join(' ')
    client.user.setUsername(newname)
  
    message.reply(`Novo nick:\n ${newname}!`)
    .then(msg => msg.delete({timeout: 10000}))
    
}

