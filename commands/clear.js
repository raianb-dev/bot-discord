const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  const role = await message.guild.roles.cache.find(role => role.id === "662420769644740609"); 
  if (!message.member.roles.cache.some(r => ["662426929009262600","662427565432242197"].includes(r.id)))
    return message.reply(
      "Seja um `moderador` para `Gerenciar Mensagens`."
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Forneça um número de até **99 mensagens** a serem excluídas"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};