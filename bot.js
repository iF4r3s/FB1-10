const Discord = require('discord.js');
const bot1 = new Discord.Client();
const bot2 = new Discord.Client();
const bot3 = new Discord.Client();
const bot4 = new Discord.Client();
const bot5 = new Discord.Client();
const bot6 = new Discord.Client();
const bot7 = new Discord.Client();
const bot8 = new Discord.Client();
const bot9 = new Discord.Client();
const bot10 = new Discord.Client();


bot1.on('ready', () => {
    console.log(`S1-10`)
});


bot1.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot1.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot1.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot1.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB1 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot1.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f1"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot2.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot2.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot2.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot2.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB2 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});

bot2.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f2"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot3.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot3.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot3.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot3.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB3 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot3.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f3"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot4.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot4.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot4.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot4.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB4 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot4.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f4"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot5.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot5.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot5.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot5.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB5 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot5.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f5"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot6.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot6.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot6.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot6.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB6 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot6.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f6"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot7.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot7.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot7.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot7.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB7 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot7.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f7"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot8.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot8.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot8.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot8.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB8 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot8.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f8"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot9.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot9.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot9.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot9.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB9 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot9.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f9"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot10.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot10.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot10.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot10.guilds.get("520354655604178958").channels.find(c => c.id == "520370626595258392");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB10 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot10.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f10"){
        message.channel.send(args.join(" "))
    }
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
bot1.login(process.env.FB1);
bot2.login(process.env.FB2);
bot3.login(process.env.FB3);
bot4.login(process.env.FB4);
bot5.login(process.env.FB5);
bot6.login(process.env.FB6);
bot7.login(process.env.FB7);
bot8.login(process.env.FB8);
bot9.login(process.env.FB9);
bot10.login(process.env.FB10);
