const Discord = require('discord.js');
const client = new Discord.Client();

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
لو سمحت حبيب قلبي تقدر تدخل سيرفري
                               [ https://discord.gg/PDmqhcP ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
لو سمحت حبيب قلبي تقدر تدخل سيرفري
                               [ https://discord.gg/PDmqhcP ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
