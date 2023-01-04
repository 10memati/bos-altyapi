module.exports = (bot) => {
    bot.onJoin()
    bot.onLeave()
    bot.onBanAdd()
    bot.onBanRemove()
    bot.onMessageUpdate()
    bot.onMessageDelete()
    bot.onUserUpdate()
    bot.onInteractionCreate()
    bot.onMessage({guildOnly: false})
}
