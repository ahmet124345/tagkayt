const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.addRole('736576082819678229')
  member.removeRole('746370516113293424')
const embed = new Discord.RichEmbed()


      .addField(`**🏷 #TAG Kayıt Sistemi 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('747866617236553869').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt"],
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: " Kayıt Sistemi",
  usage: " Kayıt Sistemi"
};