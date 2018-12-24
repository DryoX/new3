const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({
	disableEveryone: true
});

const asy = ["Halo!", "Merry Christmas 25/18!", "Happy New Year 18/19!"];

//Bot will start from here!

bot.on("ready", async () => {
	console.log(`Hello i'm ${bot.user.username} ready to help!`)
	 setInterval(() => {
 		let crq = Math.floor(Math.random() * (asy.length - 1) + 1)
 		bot.user.setActivity(asy[crq])
 	}, 4000)
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	
	let(cmd === `${prefix}info`){
		
		let wirav = new Discord.RichEmbed()
		.setColor("RANDOM")
		.addField("Information", Created By Next);
		
		return message.channel.send(wirav);
		
	}
	
	if(cmd === `${prefix}say`){
		
		let says = args.join(" ");
		if(!says) return message.channel.send("Do i need to say something?").then(message => {message.delete(5000)});
	
	    return message.channel.send(says);
	
	}
	
	if(cmd === `${prefix}bug`){
		
		let rep = args.join(" ");
		if(!rep) return message.channel.send("Any report?");
		
		let afg = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .addField("Bug report!", rep);
		   
		   bot.user.get("MY ID").send(afg);
		   {
   			
   		}
	}
	
});


bot.login(process.env.BOT_TOKEN);
    
