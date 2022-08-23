const { findUser } = require('../functions/mongoDbCoins');
const { SlashCommandBuilder } = require('discord.js');
const { responseCommand, embedCommand } = require('../functions/embed');

const commonRole = process.env.COMMON_ROLE_ID;

module.exports = {
	data: new SlashCommandBuilder().setName('mycoins').setDescription('Shows available coins'),

	async execute(interaction) {
        userId = interaction.user.id;
        member = interaction.guild.members.cache.get(userId)
        if (member.roles.cache.has(commonRole)) {
        id = interaction.user.id;
        theUser = await findUser(id);
            if(theUser !== null){
            const title = 'My coins'
            const fields = [{ name: `💰 Non-spendable Coins:`, value: ` ${theUser.nonspendable}`, inline: true },
            { name: `✨ Spendable Coins:`, value: ` ${theUser.spendable}`, inline: true }
             ]
            return responseCommand(interaction, title, fields, null, true);
            }else{
            const title = 'My coins'
            const fields = [{ name: `Name: ${interaction.user.username}`, value: `You do not have a wallet`, inline: true }]
            return responseCommand(interaction, title, fields, null, true);
            }
        }else{
            return responseCommand( interaction, null, null, "You don't have permission to use this command", true)
        }
	},
};