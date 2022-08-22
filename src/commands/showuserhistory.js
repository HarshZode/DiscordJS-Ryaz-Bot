const { SlashCommandBuilder } = require('discord.js');

const {embedCommand } = require('../functions/embed');
const {findUser} = require('../functions/mongoDbCoins');

const PermissionToAddCoins = process.env.USER_ID_WHO_CAN_ADD_COINS;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('showuserhistory')
        .setDescription('Shows coin transfer history of a user')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id != PermissionToAddCoins) {
            const description = `You don't have permission to use this command`
            const message = embedCommand(interaction,'Show User History Command', null, description);
            return interaction.reply({ embeds: [message], ephemeral: true });
        }else{
            id = interaction.options.get('user').value;
            user = await findUser(id);
            if (user !== 0) {
                SentInfo = user.sentLogs;
                RecieveInfo = user.recieveLogs;
                AddInfo = user.addcoinsLogs;
                UseInfo = user.usedcoinsLogs;
                UnusedInfo = user.unusedcoinsLogs;
                function showThis(arr) {
                    len = arr.length;
                    if (len === 0) {
                        let char = 'none';
                        return char;
                    }
                    else {
                        return arr;
                    }
                }
                EmbedARRAY = []
                if (AddInfo.length <= 0) {
                    const AddTitle = 'Coin Add History !'
                    const AddDesc = `${user.name}\nNo coins recieved`
                    const added = embedCommand(interaction, AddTitle, null, AddDesc);
                    EmbedARRAY.push(added)
                } else {
                    const AddTitle = 'Coin Add History !'
                    const AddDesc = `${user.name}\n${AddInfo.map(showThis).join('\n')}`
                    const added = embedCommand(interaction, AddTitle, null, AddDesc);
                    EmbedARRAY.push(added)
                }
                if (SentInfo.length <= 0) {
                    const title = 'Coins Transfer History !';
                    const description = `${user.name}\nNo coins Transfered`;
                    const transfer = embedCommand(interaction, title, null, description);
                    EmbedARRAY.push(transfer);
                } else {
                    const title = 'Coins Transfer History !';
                    const description = `${user.name}\n${SentInfo.map(showThis).join('\n')}`
                    const transfer = embedCommand(interaction, title, null, description);
                    EmbedARRAY.push(transfer);
                }
                if (RecieveInfo.length <= 0) {
    
                    const recieveTitle = 'Coins Recieve History !';
                    const recieveDesc = `${user.name}\nNo coins recieved`;
    
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved);
                }
                else {
                    const recieveTitle = 'Coins Recieve History !'
                    const recieveDesc = `${user.name}\n${RecieveInfo.map(showThis).join('\n')}`
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved)
                }
                if (UseInfo.length <= 0) {
    
                    const recieveTitle = 'Coins Used History !';
                    const recieveDesc = `${user.name}\nNo coins used`;
    
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved);
                }
                else {
                    const recieveTitle = 'Coins Used History !'
                    const recieveDesc = `${user.name}\n${UseInfo.map(showThis).join('\n')}`
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved)
                }
                if (UnusedInfo.length <= 0) {
    
                    const recieveTitle = 'Unused coins Removed ';
                    const recieveDesc = `${user.name}\nNo coins removed`;
    
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved);
                }
                else {
                    const recieveTitle = 'Unused coins Removed !'
                    const recieveDesc = `${user.name}\n${UnusedInfo.map(showThis).join('\n')}`
                    const recieved = embedCommand(interaction, recieveTitle, null, recieveDesc);
                    EmbedARRAY.push(recieved)
                }
    
                return interaction.reply({ embeds: EmbedARRAY, ephemeral: true });
    
    
            }
        }
        
    },
};


