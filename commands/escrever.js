const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const role = await message.guild.roles.cache.find(role => role.id === "662420769644740609"); 
  if (!message.member.roles.cache.some(r => ["662426929009262600"].includes(r.id)))
    return message.reply(
      "O comando `Escrever` é exclusivo ao `Desenvolvedor`."
    );
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};