const { findUser,removespendable } = require('../functions/mongoDbCoins');
const { SlashCommandBuilder } = require('discord.js');
const { embedCommand, responseCommand } = require('../functions/embed');

const PermissionToAddCoins = process.env.USER_ID_WHO_CAN_ADD_COINS;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removespendable')
        .setDescription('removes coins to user')
        .addIntegerOption(option => option.setName('amount').setDescription('Enter an integer').setRequired(true))
        .addUserOption(option => option.setName('user').setDescription('Enter a user').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Enter your reason here').setRequired(true)),

    async execute(interaction) {

        if (interaction.user.id != PermissionToAddCoins) {
            const description = `You don't have permission to use this command`
            const message = embedCommand(interaction, 'Add Coins Command', null, description);
            return interaction.reply({ embeds: [message], ephemeral: true });
        }
        else {
            reason = interaction.options.get('reason').value;
            amount = interaction.options.get('amount').value;
            if (amount <= 0) {
                const description = `Amount must be positive`
                const message = embedCommand(interaction, 'Add Coins Command', null, description);
                return interaction.reply({ embeds: [message], ephemeral: true });
            }
            const userid = interaction.options.get('user').value;
            const user = await findUser(userid);
            if (user !== null) {
                if (user.nonspendable < amount) {
                    const title = "User don't have enough coins"
                    return responseCommand(interaction, title, null, null, true);
                } else {
                    if (user !== null) {
                        await removespendable(userid, amount,reason);
                        const description = `Removed ${amount} to ${user.name}`
                        const message = embedCommand(interaction, 'Remove Usable Coins Command', null, description);
                        return interaction.reply({ embeds: [message], ephemeral: true });
                    }
                }

            } else {
                const description = `User Doesn't have a wallet.`
                const message = embedCommand(interaction, 'Remove Usable Coins Command', null, description);
                return interaction.reply({ embeds: [message], ephemeral: true });
            }


        }

    },
};