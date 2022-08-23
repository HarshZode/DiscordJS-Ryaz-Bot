const { findUser, transferCoins } = require('../functions/mongoDbCoins');
const { responseCommand } = require('../functions/embed');
const { SlashCommandBuilder } = require('discord.js');

const PermissionToAddCoins = process.env.USER_ID_WHO_CAN_ADD_COINS;
const commonRole = process.env.COMMON_ROLE_ID;



module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendcoins').setDescription('Transfer your coins to other user')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
        .addIntegerOption(option => option.setName('amount').setDescription('Enter an integer').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Enter your reason here').setRequired(true)),


    async execute(interaction) {
        userId = interaction.user.id;
        member = interaction.guild.members.cache.get(userId)
        if (member.roles.cache.has(commonRole)) {
            myId = interaction.user.id;
            userId = interaction.options.get('user').value;
            amountToTransfer = interaction.options.get('amount').value;
            reason = interaction.options.get('reason').value;
            if (myId === userId) {
                const title = 'You cannot send coins to yourself'
                return responseCommand( interaction, title, null, null, true);
    
            }
            if (amountToTransfer == 0) {
                const title = "Amount must be non-zero and positive"
                return responseCommand( interaction, title, null, null, true);
    
            } else if (amountToTransfer < 0) {
                const title = "Amount should be positive integer"
                return responseCommand( interaction, title, null, null, true);
    
            }
            sender = await findUser(myId);
            reciever = await findUser(userId);
            if (sender !== null && reciever !== null) {
                if (sender.nonspendable < amountToTransfer) {
                    const title = "You don't have enough coins"
                    return responseCommand( interaction, title, null, null, true);
                }
                else {
                    transferCoins(myId, userId, amountToTransfer, sender.name, reciever.name, reason)
                    if (amountToTransfer == 1) {
                        const description = `<@${myId}> ` + `transfered 💰 **${amountToTransfer} coin** to ` + `<@${userId}>\n**Reason** : ${reason}`
                        responseCommand( interaction, 'Coin Transfered !', null, description, false)
                        return interaction.channel.send(`<@${PermissionToAddCoins}>`);
                    } else {
                        const title = 'Coins Transfered !'
                        const description = `<@${myId}> ` + `transfered 💰 **${amountToTransfer} coins** to ` + `<@${userId}>\n**Reason** : ${reason}`
                        responseCommand( interaction, title, null, description, false)
                        return interaction.channel.send(`<@${PermissionToAddCoins}>`);
                    }
    
                }
            } else if (sender == null) {
                return responseCommand( interaction, null, null, "You do not have a wallet", false);
            } else if (reciever == null) {
                return responseCommand(interaction, null, null, "User does not have a wallet", false);
            } else {
                return responseCommand( interaction, null, null, "Something went wrong", false)
            }
        }else{
            return responseCommand( interaction, null, null, "You don't have permission to use this command", false)
        }
    },
};