const { SlashCommandBuilder } = require('discord.js');

const { responseCommand} = require('../functions/embed');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('documentation')
		.setDescription(`Shares a link to bot's documentation`),
	async execute(interaction) {
        const fields = { name: 'You can get documentation link', value: `[here](https://github.com/HarshZode/DiscordJS-Ryaz-Bot#readme)`, inline: true }
        return responseCommand(interaction, 'Documentation', fields, null, false);
	},
};