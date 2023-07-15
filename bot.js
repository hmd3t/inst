const { Telegraf } = require("telegraf");
const request = require("request");

const token = "6370542400:AAGgs2eCzYvFJA4WhmHXOmDiOpuA6b2kSts"

const bot = new Telegraf(token)


bot.command("start", async (ctx) => {
    await ctx.replyWithHTML(`ارسل رابط الفيديو`)
})


bot.on("message", async (ctx) => {
    const link = ctx.update.message.text
    link = link.split('')
    if (link[0] === "h", link[1] === "t", link[2] === "t", link[3] === "p", link[4] === "s",link[5] === ":", link[6] === "/", link[7] === "/", link[8] === "w", link[9] === "w",link[10] === "w", link[11] === ".", link[12] === "i", link[13] === "n", link[14] === "s", link[15] === "t",link[16] === "a", link[17] === "g", link[18] === "r", link[19] === "a", link[20] === "m") {
        const options = {
        method: 'GET',
        url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
        qs: {url: link},
        headers: {
            'X-RapidAPI-Key': 'a117865263msh2421de2f17049f1p13b3c0jsnde0a2f087cd4', // '' ushbu string ichiga siz rapidapi.com orqali olgan api ni qoyasiz, api shu ko'rinishda bo'ladi - 0390edd038msh43715b569645b4c1bb1a7jsn5093b1f63
            'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
            useQueryString: true
        }
        };
    
        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body)
            console.log(data.video);
            await ctx.telegram.sendVideo(ctx.chat.id, `${data.video}`)
    
        });
    } else {
        await ctx.replyWithHTML(`Please enter valid url!`)
    }
})

bot.launch().then(() => {
    console.log("Bot started...")
})