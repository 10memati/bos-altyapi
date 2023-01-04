//modüller
const me = require("aoi.js")
const config = require('./config.js');
const bot = new me.Bot(config.Bot);

//handler
require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/callbacks')(bot)

//komutlar
const loader = new me.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

//kayıt mesajı
bot.joinCommand({
    channel: "1019746878960709702",
    code: `
    <@$authorid>
    $color[1;$getvar[hex]]
    $title[1;$customemoji[hogwarts_magicia] **__Sayın Cadı/Büyücü__**]
    $thumbnail[1;https://cdn.discordapp.com/attachments/1020704501482659870/1036325932375482438/PP1.png]
    $description[1;
**Hogwarts Cadılık ve Büyücülük Okulu**'nda yerinizin ayrılmış olduğunu size bildirmekten mutluluk duymaktayız. Gerekli kitap ve gereçlerin listesi ilişikte sunulmuştur. Ders yılı **Eylülde** başlamaktadır. Baykuşunuzu **31 Temmuz**'dan önce göndermenizi dileriz.

$userswithrole[1021372464984494132;$guildid;mention]
~ *Müdüre Yardımcısı*]
    $image[1;https://cdn.discordapp.com/attachments/1020810347319394444/1036309246310109274/Magiciawp4.png]
    $footer[1;$servername;$servericon]
    $addtimestamp[1]
`})

//kayıt kanalı
bot.loopCommand({
    code: `
<:asa_magicia:1021890165683265586> Magicia'ya hoş geldiniz! <:asa_magicia:1021890165683265586>

Siz de bu sihirli evrene katılmak, yeni büyüler öğrenmek ve Hogwarts'ı baştan aşağı keşfetmek ister misiniz?

O zaman tek yapmanız gereken şey, aşağıdaki şablonu doldurarak bu kanala atmak!

Adınız - Yaşınız - En sevdiğiniz binadan en az sevdiğinize doğru sıralamanız - Rol içi cinsiyetiniz [Cadı/Büyücü] - Kan durumunuz [Safkan, Melez ya da Muggle Doğumlu]

<:baykus_magicia:1021421121595260958> Örnekler: <:baykus_magicia:1021421121595260958>

Derin / 14 / Slytherin - Gryffindor - Ravenclaw - Hufflepuff / Cadı / Safkan

Emir / 18 / Ravenclaw - Slytherin - Hufflepuff - Gryffindor / Büyücü / Melez 
<@&770066033117364275>
`,
    channel: "770587826047680522",
    executeOnStartup: true,
    every: 7200000
})

//bump
bot.loopCommand({
    code: `
@everyone bump time (Bu mesaj 2 saatte 1 atılır.)
`,
    channel: "790488220424994836",
    executeOnStartup: true,
    every: 7200000
})

//selam
bot.command({
    name: "selam",
    nonPrefixed: true,
    code: `
    $reply[$messageid;no]
    Selam Developer!
    $onlyif[$message!=;]
    $onlyforids[378974293507440640;]
`})

//database
bot.loopCommand({
    code: `
    $createfile[$readfile[database/main/main_scheme_1.sql];main_scheme_1.sql]`,
    channel: "1019627295012565053",
    executeOnStartup: true,
    every: 86400000
})