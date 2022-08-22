const { findUser } = require('../functions/mongoDbCoins');
const { SlashCommandBuilder } = require('discord.js');
const { responseCommand, embedCommand } = require('../functions/embed');

const commonRole = process.env.COMMON_ROLE_ID;

module.exports = {
	data: new SlashCommandBuilder().setName('showuserbalance').setDescription(`Shows user's available coins`)
    .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),

	async execute(interaction) {
        userId = interaction.user.id;
        member = interaction.guild.members.cache.get(userId)
        if (member.roles.cache.has(commonRole)) {
        id = interaction.options.get('user').value;
            theUser = await findUser(id);
            if(theUser !== null){
                const title = 'Check User Coin command'
                const fields = [{ name: `Unusable Coins:`, value: ` ${theUser.unusablecoins}`, inline: true },
                { name: `Usable Coins:`, value: ` ${theUser.usablecoins}`, inline: true }
                 ]
                return responseCommand(interaction, title, fields, `User : ${theUser.name}`, true);
            }else{
                return responseCommand( interaction, null, null, "User doesn't have a wallet", true)
            }
        }else{
            return responseCommand( interaction, null, null, "You don't have permission to use this command", true)
        }
	},
};