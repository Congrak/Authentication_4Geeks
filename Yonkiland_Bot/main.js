const { Telegraf } = require('telegraf');

const bot = new Telegraf('5434846586:AAE5ecpFSFkz2DYswvP6AJVpsLQHaOfM5H0');

const helpMessage = `Para volver a usar el bot, escriba /start`;

bot.start((ctx) => {
    
    ctx.reply(`Hola mi nombre es Bobby y soy el encargado de ayudarte en tu compra!

Para ver nuestros productos por favor usar /shop

Si necesitas ayuda escribe /help`)}

);

bot.help((ctx) => {

    ctx.reply(helpMessage)}

);

bot.command('shop',(ctx)=>{
    var chatId = ctx.chat.id;
    var botones = {
        reply_markup:{
            inline_keyboard:[
             [{text:"🌸", callback_data: "flores"},
             {text:"🍂", url:"https://twitter.com/"},
             {text:"❄️", url:"https://www.instagram.com//"},
             {text:"🔮", url:"https://www.facebook.com//"},
             {text:"🍬", url:"https://www.youtube.com/"},
             {text:"🍡", url:"https://www.twitch.tv/"}
         ]
            ]
        },
        parse_mode:"HTML",
    };

    
    bot.telegram.sendMessage(chatId, 'Nuestros productos son:' , botones);

});

bot.launch();