module.exports.run = async (client, message, args) => {
  const role = await message.guild.roles.cache.find(role => role.id === "662420769644740609"); 
  if (!message.member.roles.cache.some(r => ["662426929009262600"].includes(r.id)))
    return message.reply(
      "O comando `ping` é exclusivo ao `Desenvolvedor`."
    );
  const m = await message.channel.send('ping?');
  m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};