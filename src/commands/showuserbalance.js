const { findUser } = require('../functions/mongoDbCoins');
const { SlashCommandBuilder } = require('discord.js');
const { responseCommand, embedCommand } = require('../functions/embed');

const commonRole = process.env.COMMON_ROLE_ID;

module.exports = {
	data: new SlashCommandBuilder().setName('showuserbalance').setDescription(`Shows user's available coins`)
    .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),

	async execute(interaction) {
        if (interaction.user.id != PermissionToAddCoins) {
            const description = `You don't have permission to use this command`
            const message = embedCommand(interaction,'Show User History Command', null, description);
            return interaction.reply({ embeds: [message], ephemeral: true });
        }else{
        userId = interaction.user.id;
        member = interaction.guild.members.cache.get(userId)
        if (member.roles.cache.has(commonRole)) {
        id = interaction.options.get('user').value;
            theUser = await findUser(id);
            if(theUser !== null){
                const title = 'Check User Coin command'
                const fields = [{ name: `💰 Non-spendable Coins:`, value: ` ${theUser.nonspendable}`, inline: true },
                { name: `✨ Spendable Coins:`, value: ` ${theUser.spendable}`, inline: true }
                 ]
                return responseCommand(interaction, title, fields, `User : ${theUser.name}`, true);
            }else{
                return responseCommand( interaction, null, null, "User doesn't have a wallet", true)
            }
        }else{
            return responseCommand( interaction, null, null, "You don't have permission to use this command", true)
        }}
	},
};