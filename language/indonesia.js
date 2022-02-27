exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Nih Subscribe : https://youtu.be/hS60tE50KOo `
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya Raja-BotZ, bot ini adalah Beta Multi-Device Whatsapp. 

➳» Nama Bot : Raja BotZ
➳» Creator Bot : Maul Botz
➳» Creator Ke2 : Raja Store
➳» Nama Owner : Raja Store
➳» Nomer Owner : 082143440025`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*

┏━━❒ *「 Info User 」*
┃⎆ Nama : ${pushname}
┃⎆ Bio :
┃⎆ Status : Gratis
┃⎆ List-Menu Raja-BotZ
┗━━━━━━━━━━❒

┏━━❒ *「 Time Server 」*
┃⎆ Time Server : ${time}
┗━━━━━━━━━━❒

┏━━❒ *「 Info Bot 」*
┃⎆ Nama Bot : Raja-BotZ
┃⎆ Nama Owner : Raja Store
┃⎆ Nomer Owner : 082143440025
┃⎆ YouTube :
┃⎆ https://youtu.be/hS60tE50KOo
┗━━━━━━━━━━❒

┏━━❒ *「 Bot Info 」*
┃❅  ${prefix}owner
┃❅  ${prefix}rules
┃❅  ${prefix}sc
┃❅  ${prefix}ping
┃❅  ${prefix}runtime
┃❅  ${prefix}botstatus
┃❅ ${prefix}donate
┗━━━━━━━━━━❒

┏━━❒ *「 Owner 」*
┃❅  < evaluate
┃❅  > evaluate
┃❅  $ exec
┃❅  => exec
┃❅  ${prefix}setmenu [query]
┃❅  ${prefix}setmenu templateLocation
┃❅  ${prefix}setmenu templateTenor
┃❅  ${prefix}sendsesi
┃❅  ${prefix}listpc
┃❅  ${prefix}listgc
┃❅  ${prefix}broadcast [text]
┃❅  ${prefix}bc [text]
┃❅  ${prefix}bcgc [text]
┃❅  ${prefix}nsfw [on/off]
┃❅  ${prefix}autorespond [on/off]
┃❅  ${prefix}antiviewonce [on/off]
┃❅  ${prefix}join [link]
┃❅  ${prefix}self
┃❅  ${prefix}public [only bot]
┃❅  ${prefix}del [reply pesan bot]
┃❅  ${prefix}setppbot [reply image]
┗━━━━━━━━━━❒

┏━━❒ *「 Data Base 」*
┃❅  ${prefix}setcmd [reply stiker]
┃❅  ${prefix}delcmd [reply stiker]
┃❅  ${prefix}listcmd
┃❅  ${prefix}absen
┃❅  ${prefix}cekabsen
┃❅  ${prefix}deleteabsen
┃❅  ${prefix}absenstart
┃❅  ${prefix}addmsg [nama file]
┃❅  ${prefix}getmsg [nama file]
┃❅  ${prefix}listmsg
┃❅ ${prefix}delmsg [nama file]
┗━━━━━━━━━━❒

┏━━❒ *「 Group Menu 」*
┃❅  ${prefix}listonline
┃❅  ${prefix}sider
┃❅  ${prefix}infochat
┃❅  ${prefix}setdesk [text]
┃❅  ${prefix}setppgrup [reply image]
┃❅  ${prefix}antilink [on/off]
┃❅  ${prefix}revoke
┃❅  ${prefix}leave
┃❅  ${prefix}add [62***]
┃❅  ${prefix}kick @tag
┃❅  ${prefix}leave
┃❅  ${prefix}linkgc
┃❅  ${prefix}group [open/close]
┃❅  ${prefix}tagall [text]
┃❅  ${prefix}hidetag [text]
┗━━━━━━━━━━❒

┏━━❒ *「 Anime Menu 」*
┃❅  ${prefix}quotesanime
┃❅  ${prefix}anime [query]
┃❅  ${prefix}manga [query]
┃❅  ${prefix}character [query]
┗━━━━━━━━━━❒

┏━━❒ *「 Tag Menu 」*
┃❅  ${prefix}stickertag
┃❅  ${prefix}videotag [query]
┃❅  ${prefix}vntag [query]
┃❅  ${prefix}imagetag [query]
┗━━━━━━━━━━❒

┏━━❒ *「 Stalking 」*
┃❅  ${prefix}igstalk [username]
┃❅  ${prefix}ghstalk [username]
┃❅  ${prefix}ytstalk [channel]
┗━━━━━━━━━━❒

┏━━❒ *「 Search Menu 」*
┃❅  ${prefix}ytsearch [query]
┃❅  ${prefix}wallpaper [query]
┃❅  ${prefix}wikimedia [query]
┃❅ ${prefix}hentai
┃❅ ${prefix}wattpad [query]
┃❅ ${prefix}webtoons [query]
┃❅ ${prefix}drakor [query]
┃❅ ${prefix}pinterest [query]
┗━━━━━━━━━━❒

┏━━❒ *「 Converter Menu 」*
┃❅ ${prefix}stiker [reply image]
┃❅ ${prefix}tourl [image/video]
┃❅ ${prefix}togif [sticker]
┃❅ ${prefix}tomp4 [sticker]
┃❅ ${prefix}toimg [reply sticker]
┗━━━━━━━━━━❒

┏━━❒ *「 Image Effect Menu 」*
┃❅ ${prefix}wanted [reply image/stiker]
┃❅ ${prefix}utatoo [reply image/stiker]
┃❅ ${prefix}unsharpen [reply image/stiker]
┃❅ ${prefix}thanos [reply image/stiker]
┃❅ ${prefix}sniper [reply image/stiker]
┃❅ ${prefix}sharpen [reply image/stiker]
┃❅ ${prefix}sepia [reply image/stiker]
┃❅ ${prefix}scary [reply image/stiker]
┃❅ ${prefix}rip [reply image/stiker]
┃❅ ${prefix}redple [reply image/stiker]
┃❅ ${prefix}rejected [reply image/stiker]
┃❅ ${prefix}posterize [reply image/stiker]
┃❅ ${prefix}ps4 [reply image/stiker]
┃❅ ${prefix}pixelize [reply image/stiker]
┃❅ ${prefix}missionpassed [reply image/stiker]
┃❅ ${prefix}moustache [reply image/stiker]
┃❅ ${prefix}lookwhatkarenhave [reply image/stiker]
┃❅ ${prefix}jail [reply image/stiker]
┃❅ ${prefix}invert [reply image/stiker]
┃❅ ${prefix}instagram [reply image/stiker]
┃❅ ${prefix}greyscale [reply image/stiker]
┃❅ ${prefix}glitch [reply image/stiker]
┃❅ ${prefix}gay [reply image/stiker]
┃❅ ${prefix}frame [reply image/stiker]
┃❅ ${prefix}fire [reply image/stiker]
┃❅ ${prefix}distort [reply image/stiker]
┃❅ ${prefix}dictator [reply image/stiker]
┃❅ ${prefix}deepfry [reply image/stiker]
┃❅ ${prefix}ddungeon [reply image/stiker]
┃❅ ${prefix}circle [reply image/stiker]
┃❅ ${prefix}challenger [reply image/stiker]
┃❅ ${prefix}burn [reply image/stiker]
┃❅ ${prefix}brazzers [reply image/stiker]
┃❅ ${prefix}beautiful [reply image/stiker]
┗━━━━━━━━━━❒

┏━━❒ *「 Sticker Effect 」*
┃❅ ${prefix}jail [reply image/stiker]
┃❅ ${prefix}red [reply image/stiker]
┃❅ ${prefix}gay [reply image/stiker]
┃❅ ${prefix}bloo [reply image/stiker]
┃❅ ${prefix}blue [reply image/stiker]
┃❅ ${prefix}sepia [reply image/stiker]
┃❅ ${prefix}green [reply image/stiker]
┃❅ ${prefix}glass [reply image/stiker]
┃❅ ${prefix}invert [reply image/stiker]
┃❅ ${prefix}blurple [reply image/stiker]
┃❅ ${prefix}blurple2 [reply image/stiker]
┃❅ ${prefix}wasted [reply image/stiker]
┃❅ ${prefix}passed [reply image/stiker]
┃❅ ${prefix}triggered [reply image/stiker]
┃❅ ${prefix}comrade [reply image/stiker]
┃❅ ${prefix}greyscale [reply image/stiker]
┃❅ ${prefix}threshold [reply image/stiker]
┃❅ ${prefix}brightness [reply image/stiker]
┃❅ ${prefix}invertgreyscale [reply image/stiker]
┗━━━━━━━━━━❒

┏━━❒ *「 Download Menu 」*
┃❅ ${prefix}tiktok [link]
┃❅ ${prefix}tiktoknowm [link]
┃❅ ${prefix}tiktokwm [link]
┃❅ ${prefix}tiktokaudio [link]
┃❅ ${prefix}ytdl [link]
┃❅ ${prefix}play [query]
┃❅ ${prefix}ytmp3 [link]
┃❅ ${prefix}ytshortmp3 [link]
┃❅ ${prefix}ytmp4 [link]
┃❅ ${prefix}ytshorts [link]
┃❅ ${prefix}facebook [link]
┃❅ ${prefix}facebooksd [link]
┃❅ ${prefix}facebookhd [link]
┃❅ ${prefix}fbaudio [link]
┃❅ ${prefix}igstory [username]
┃❅ ${prefix}igdl [link]
┃❅ ${prefix}igphoto [link]
┃❅ ${prefix}igvideo [link]
┃❅ ${prefix}igreels [link]
┃❅ ${prefix}igtv [link]
┃❅ ${prefix}soundcloud [link]
┃❅ ${prefix}gitclone [link repo]
┃❅ ${prefix}gitrepo [username repo branch]
┃❅ ${prefix}mediafire [link]
┃❅ ${prefix}twitter link
┗━━━━━━━━━━❒

┏━━❒ *「 Random Anime 」*
┃❅ ${prefix}loli
┃❅ ${prefix}neko
┃❅ ${prefix}waifu
┃❅ ${prefix}shinobu
┃❅ ${prefix}megumin
┃❅ ${prefix}bully
┃❅ ${prefix}cuddle
┃❅ ${prefix}cry
┃❅ ${prefix}hug
┃❅ ${prefix}awoo
┃❅ ${prefix}kiss
┃❅ ${prefix}lick
┃❅ ${prefix}pat
┃❅ ${prefix}smug
┃❅ ${prefix}bonk
┃❅ ${prefix}yeet
┃❅ ${prefix}blush
┃❅ ${prefix}smile
┃❅ ${prefix}wave
┃❅ ${prefix}highfive
┃❅ ${prefix}handhold
┃❅ ${prefix}nom
┃❅ ${prefix}bite
┃❅ ${prefix}glomp
┃❅ ${prefix}slap
┃❅ ${prefix}kill
┃❅ ${prefix}happy
┃❅ ${prefix}wink
┃❅ ${prefix}poke
┃❅ ${prefix}dance
┃❅ ${prefix}cringe
┗━━━━━━━━━━❒

┏━━❒ *「 Nsfw & Sfw Menu 」*
┃❅ ${prefix}ahegao
┃❅ ${prefix}ass
┃❅ ${prefix}bdsm
┃❅ ${prefix}blowjob
┃❅ ${prefix}cuckold
┃❅ ${prefix}cum
┃❅ ${prefix}ero
┃❅ ${prefix}femdom
┃❅ ${prefix}foot
┃❅ ${prefix}gangbang
┃❅ ${prefix}glasses
┃❅ ${prefix}jahy
┃❅ ${prefix}manga
┃❅ ${prefix}masturbation
┃❅ ${prefix}neko
┃❅ ${prefix}orgy
┃❅ ${prefix}panties
┃❅ ${prefix}pussy
┃❅ ${prefix}tentacles
┃❅ ${prefix}thighs
┃❅ ${prefix}yuri
┃❅ ${prefix}feet
┃❅ ${prefix}lewdkemo
┃❅ ${prefix}woof
┃❅ ${prefix}gasm
┃❅ ${prefix}solo
┃❅ ${prefix}8ball
┃❅ ${prefix}goose
┃❅ ${prefix}avatar
┃❅ ${prefix}hololewd
┃❅ ${prefix}gecg
┃❅ ${prefix}holo
┃❅ ${prefix}fox_girl
┃❅ ${prefix}tits
┃❅ ${prefix}eroyuri
┃❅ ${prefix}holoyero
┃❅ ${prefix}lizard
┃❅ ${prefix}keta
┃❅ ${prefix}eron
┃❅ ${prefix}erok
┃❅ ${prefix}kemonomimi
┃❅ ${prefix}cum_jpg
┃❅ ${prefix}nsfw_avatar
┃❅ ${prefix}erofeet
┃❅ ${prefix}meow
┃❅ ${prefix}wallpaper
┃❅ ${prefix}waifu
┃❅ ${prefix}trap
┃❅ ${prefix}lewd
┃❅ ${prefix}pussy_jpg
┃❅ ${prefix}futanari
┃❅ ${prefix}lewdk
┃❅ ${prefix}solog
┃❅ ${prefix}smug
┃❅ ${prefix}cum
┃❅ ${prefix}slap
┃❅ ${prefix}les
┃❅ ${prefix}erokemo
┃❅ ${prefix}bj
┃❅ ${prefix}pwankg
┃❅ ${prefix}pat
┃❅ ${prefix}poke
┃❅ ${prefix}feed
┃❅ ${prefix}nsfw_neko_gif
┃❅ ${prefix}pussy
┃❅ ${prefix}feetg
┃❅ ${prefix}baka
┃❅ ${prefix}hug
┃❅ ${prefix}kiss
┃❅ ${prefix}tickle
┃❅ ${prefix}spank
┃❅ ${prefix}kuni
┃❅ ${prefix}classic
┃❅ ${prefix}boobs
┃❅ ${prefix}anal
┃❅ ${prefix}ngif
┃❅ ${prefix}cuddle
┃❅ ${prefix}zettai
┗━━━━━━━━━━❒

┏━━❒ *「 Textpro Menu 」*
┃❅ ${prefix}halloween2 text|text2
┃❅ ${prefix}horror text|text2
┃❅ ${prefix}game8bit text|text2
┃❅ ${prefix}layered text|text2
┃❅ ${prefix}glitch2 text|text2
┃❅ ${prefix}coolg text|text2
┃❅ ${prefix}coolwg text|text2
┃❅ ${prefix}realistic text|text2
┃❅ ${prefix}space3d text|text2
┃❅ ${prefix}gtiktok text|text2
┃❅ ${prefix}stone text|text2
┃❅ ${prefix}marvel text|text2
┃❅ ${prefix}marvel2 text|text2
┃❅ ${prefix}pornhub text|text2
┃❅ ${prefix}avengers text|text2
┃❅ ${prefix}metalr text|text2
┃❅ ${prefix}metalg text|text2
┃❅ ${prefix}metalg2 text|text2
┃❅ ${prefix}halloween2 text|text2
┃❅ ${prefix}lion text|text2
┃❅ ${prefix}wolf_bw text|text2
┃❅ ${prefix}wolf_g text|text2
┃❅ ${prefix}ninja text|text2
┃❅ ${prefix}3dsteel text|text2
┃❅ ${prefix}horror2 text|text2
┃❅ ${prefix}lava text|text2
┃❅ ${prefix}bagel text|text2
┃❅ ${prefix}blackpink text
┃❅ ${prefix}rainbow2 text
┃❅ ${prefix}water_pipe text
┃❅ ${prefix}halloween text
┃❅ ${prefix}sketch text
┃❅ ${prefix}sircuit text
┃❅ ${prefix}discovery text
┃❅ ${prefix}metallic2 text
┃❅ ${prefix}fiction text
┃❅ ${prefix}demon text
┃❅ ${prefix}transformer text
┃❅ ${prefix}berry text
┃❅ ${prefix}thunder text
┃❅ ${prefix}magma text
┃❅ ${prefix}3dstone text
┃❅ ${prefix}neon text
┃❅ ${prefix}glitch text
┃❅ ${prefix}harry_potter text
┃❅ ${prefix}embossed text
┃❅ ${prefix}broken text
┃❅ ${prefix}papercut text
┃❅ ${prefix}gradient text
┃❅ ${prefix}glossy text
┃❅ ${prefix}watercolor text
┃❅ ${prefix}multicolor text
┃❅ ${prefix}neon_devil text
┃❅ ${prefix}underwater text
┃❅ ${prefix}bear text
┃❅ ${prefix}wonderfulg text
┃❅ ${prefix}christmas text
┃❅ ${prefix}neon_light text
┃❅ ${prefix}snow text
┃❅ ${prefix}cloudsky text
┃❅ ${prefix}luxury2 text
┃❅ ${prefix}gradient2 text
┃❅ ${prefix}summer text
┃❅ ${prefix}writing text
┃❅ ${prefix}engraved text
┃❅ ${prefix}summery text
┃❅ ${prefix}3dglue text
┃❅ ${prefix}metaldark text
┃❅ ${prefix}neonlight text
┃❅ ${prefix}oscar text
┃❅ ${prefix}minion text
┃❅ ${prefix}holographic text
┃❅ ${prefix}purple text
┃❅ ${prefix}glossyb text
┃❅ ${prefix}deluxe2 text
┃❅ ${prefix}glossyc text
┃❅ ${prefix}fabric text
┃❅ ${prefix}neonc text
┃❅ ${prefix}newyear text
┃❅ ${prefix}newyear2 text
┃❅ ${prefix}metals text
┃❅ ${prefix}xmas text
┃❅ ${prefix}blood text
┃❅ ${prefix}darkg text
┃❅ ${prefix}joker text
┃❅ ${prefix}wicker text
┃❅ ${prefix}natural text
┃❅ ${prefix}firework text
┃❅ ${prefix}skeleton text
┃❅ ${prefix}balloon text
┃❅ ${prefix}balloon2 text
┃❅ ${prefix}balloon3 text
┃❅ ${prefix}balloon4 text
┃❅ ${prefix}balloon5 text
┃❅ ${prefix}balloon6 text
┃❅ ${prefix}balloon7 text
┃❅ ${prefix}steel text
┃❅ ${prefix}gloss text
┃❅ ${prefix}denim text
┃❅ ${prefix}decorate text
┃❅ ${prefix}decorate2 text
┃❅ ${prefix}peridot text
┃❅ ${prefix}rock text
┃❅ ${prefix}glass text
┃❅ ${prefix}glass2 text
┃❅ ${prefix}glass3 text
┃❅ ${prefix}glass4 text
┃❅ ${prefix}glass5 text
┃❅ ${prefix}glass6 text
┃❅ ${prefix}glass7 text
┃❅ ${prefix}glass8 text
┃❅ ${prefix}captain_as2 text
┃❅ ${prefix}robot text
┃❅ ${prefix}equalizer text
┃❅ ${prefix}toxic text
┃❅ ${prefix}sparkling text
┃❅ ${prefix}sparkling2 text
┃❅ ${prefix}sparkling3 text
┃❅ ${prefix}sparkling4 text
┃❅ ${prefix}sparkling5 text
┃❅ ${prefix}sparkling6 text
┃❅ ${prefix}sparkling7 text
┃❅ ${prefix}decorative text
┃❅ ${prefix}chocolate text
┃❅ ${prefix}strawberry text
┃❅ ${prefix}koifish text
┃❅ ${prefix}bread text
┃❅ ${prefix}matrix text
┃❅ ${prefix}blood2 text
┃❅ ${prefix}neonligth2 text
┃❅ ${prefix}thunder2 text
┃❅ ${prefix}3dbox text
┃❅ ${prefix}neon2 text
┃❅ ${prefix}roadw text
┃❅ ${prefix}bokeh text
┃❅ ${prefix}gneon text
┃❅ ${prefix}advanced text
┃❅ ${prefix}dropwater text
┃❅ ${prefix}wall text
┃❅ ${prefix}chrismast text
┃❅ ${prefix}honey text
┃❅ ${prefix}drug text
┃❅ ${prefix}marble text
┃❅ ${prefix}marble2 text
┃❅ ${prefix}ice text
┃❅ ${prefix}juice text
┃❅ ${prefix}rusty text
┃❅ ${prefix}abstra text
┃❅ ${prefix}biscuit text
┃❅ ${prefix}wood text
┃❅ ${prefix}scifi text
┃❅ ${prefix}metalr text
┃❅ ${prefix}purpleg text
┃❅ ${prefix}shiny text 
┃❅ ${prefix}jewelry text
┃❅ ${prefix}jewelry2 text
┃❅ ${prefix}jewelry3 text
┃❅ ${prefix}jewelry4 text
┃❅ ${prefix}jewelry5 text
┃❅ ${prefix}jewelry6 text
┃❅ ${prefix}jewelry7 text
┃❅ ${prefix}jewelry8 text
┃❅ ${prefix}metalh text
┃❅ ${prefix}golden text
┃❅ ${prefix}glitter text
┃❅ ${prefix}glitter2 text
┃❅ ${prefix}glitter3 text
┃❅ ${prefix}glitter4 text
┃❅ ${prefix}glitter5 text
┃❅ ${prefix}glitter6 text
┃❅ ${prefix}glitter7 text
┃❅ ${prefix}metale text
┃❅ ${prefix}carbon text
┃❅ ${prefix}candy text
┃❅ ${prefix}metalb text
┃❅ ${prefix}gemb text
┃❅ ${prefix}3dchrome text
┃❅ ${prefix}metalb2 text
┃❅ ${prefix}metalg text
┃❅ ${prefix}metalg text
┗━━━━━━━━━━❒

┏━━❒ *「 Others Menu 」*
┃❅ ${prefix}afk [reason]
┃❅ ${prefix}translate kode_bahasa text
┃❅ ${prefix}kalkulator [query]
┃❅ ${prefix}smeme [text]
┃❅ ${prefix}smeme2 [text|text]
┃❅ ${prefix}memegen [text|text]
┗━━━━━━━━━━❒

┏━━❒ *「 Game Menu 」*
┃❅ ${prefix}kuismath
┃❅ ${prefix}tebak [option]
┃❅ ${prefix}tekateki
┃❅ ${prefix}susunkata
┃❅ ${prefix}caklontong
┗━━━━━━━━━━❒

┏━━❒ *「 Asupan Menu 」*
┃❅ ${prefix}chika
┃❅ ${prefix}delvira
┃❅ ${prefix}ayu
┃❅ ${prefix}bunga
┃❅ ${prefix}aura
┃❅ ${prefix}nisa
┃❅ ${prefix}ziva
┃❅ ${prefix}yana
┃❅ ${prefix}viona
┃❅ ${prefix}syania
┃❅ ${prefix}riri
┃❅ ${prefix}syifa
┃❅ ${prefix}mama_gina
┃❅ ${prefix}alcakenya
┃❅ ${prefix}mangayutri
┃❅ ${prefix}rikagusriani
┃❅ ${prefix}asupan
┃❅ ${prefix}bocil
┃❅ ${prefix}geayubi
┃❅ ${prefix}santuy
┃❅ ${prefix}ukhty
┃❅ ${prefix}syifa
┗━━━━━━━━━━❒

┏━━❒ *「 Random Menu 」*
┃❅ ${prefix}china 
┃❅ ${prefix}indonesia 
┃❅ ${prefix}malaysia 
┃❅ ${prefix}thailand 
┃❅ ${prefix}korea 
┃❅ ${prefix}japan 
┃❅ ${prefix}vietnam 
┃❅ ${prefix}jenni 
┃❅ ${prefix}jiso 
┃❅${prefix}lisa  
┃❅ ${prefix}rose
┗━━━━━━━━━━❒

┏━━❒ *「 Thanks To 」* 
┃❅ My God
┃❅ My Parents
┃❅ DikaArdnt
┃❅ Mhankbarbar
┃❅ AghnyChan
┃❅ Maul Botz
┃❅ ZeeoneOfc
┃❅ Penyedia Module
┃❅ And All Support
┗━━━━━━━━━━❒

*Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya, 
lapor owner agar segera di perbaiki !!*
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan MaulBotz di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan MaulBotz
😖🙏
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 😸
	
🌐 Nama :
🗺️ Umur :
⏰ Asal Kota :
📦 Gender :

𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k`
}
exports.leave = () =>{
	return`Yah out Mental Beban Keluarga 😔
GoodBye Beban Keluarga 😣🌱`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtu.be/hS60tE50KOo
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 Thanks To 」
├ My God
├ My Parents
├ DikaArdnt
├ Mhankbarbar
├ AghnyChan
├ Maul Botz
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support
`
}