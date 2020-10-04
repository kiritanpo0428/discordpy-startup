// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.login( process.env.DISCORD_BOT_TOKEN );


client.on('message',message =>{
  if ("stop" && "start" && "kyuukei") {
    if (message.channel.id == "758098013368745985") {
      const collector = message.channel.createMessageCollector(
        m => m.channel == message.channel,
        { time: 8000 }
      );
      collector.on("end", async collected => {
        if (collected.size == 0 && "stop" && "kyuukei") {
          await message.channel.send("^^atk");
        }  
      });
    }
  }
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
} 

client.on("messageUpdate", (o, n) => {
  let embed = n.embeds[0];
  if (!embed || n.channel.id != "758098013368745985") return;
  if (embed.title && embed.title.match("appears"))
    setTimeout(() => {
      n.channel.send("^^atk");
    }, 500);
});
client.on("messageUpdate", (o, n) => {
  let embed = n.embeds[0];
  if (!embed || n.channel.id != "726324444414476328") return;
  if (embed.title && embed.title.match("待ち構えている"))
    setTimeout(() => {
      n.channel.send("::atk");
    }, 1000);
});
client.on("messageUpdate", (o, n) => {
  let embed = n.embeds[0];
  if (!embed || n.channel.id != "726324444414476328") return;
  if (embed.description && embed.description.match("刹那#8040は"))
    setTimeout(() => {
      n.channel.send("::atk");
    }, 500);
});
client.on("messageUpdate", (o, n) => {
  let embed = n.embeds[0];
  if (!embed || n.channel.id != "726324444414476328") return;
  if (
    embed.description &&
    embed.description.match("<@714518436578852944>はエリクサーを使った！")
  )
    setTimeout(() => {
      n.channel.send("::atk");
    }, 500);
});
client.on("messageUpdate", (o, n) => {
  let embed = n.embeds[0];
  if (!embed || n.channel.id != "726324444414476328") return;
  if (
    embed.description &&
    embed.description.match("<@714518436578852944>はもうやられている！")
  )
    setTimeout(() => {
      n.channel.send("::i e");
    }, 500);
});
client.on('message',message =>{
  if ("stop" && "start" && "kyuukei") {
    if (message.channel.id == "726324444414476328") {
      const collector = message.channel.createMessageCollector(
        m => m.channel == message.channel,
        { time: 8000 }
      );
      collector.on("end", async collected => {
        if (collected.size == 0 && "stop" && "kyuukei") {
          await message.channel.send("::atk");
        }  
      });
    }
  }
});
client.on("message", message => {
  if (
    message.content.startsWith("t.say") &&
    message.author.id == "714518436578852944"
  )
    message.channel.send(message.content.slice(6));
});
