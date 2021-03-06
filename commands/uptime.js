const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const role = await message.guild.roles.cache.find(role => role.id === "662420769644740609"); 
  if (
    !message.member.roles.cache.some(r =>
      [
        "662426929009262600"
      ].includes(r.id) )) {
  return message.reply(" O comando `uptime` Ã© exclusivo ao `Desenvolvedor`.")
  }
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `ðï¸ ${days.toFixed()} dias\nðï¸ ${hours.toFixed()} horas\nðï¸ ${minutes.toFixed()} minutos\nðï¸ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade ð°ï¸`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor("#FF0000")
    .setDescription(`**Estou online hÃ¡:**\n${uptime}`)

  message.channel.send(embed);
};