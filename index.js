const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const check = [
   "Hello!",
   "Created by Next",
   "Version 1.0.0"
];

client.on("Ready", async () => {
	console.log(`i'm ${client.user.username} ready to help!`)
	 setInterval(() => {
	    let cof = Math.floor(Math.random () * (check.length + 1) - 1);
	    client.user.setActivity(check[cof])
	}, 4000);
	
	});

client.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;


let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let cmd = messageArray[0];
let prefix = "xa!";

if(cmd === `{prefix}say`){
	
let say = args.join(" ");
if(!say) return message.channel.send("Anything to say?");

return message.channel.send(say);

   }

});

client.login(process.env.BOT_TOKEN);
