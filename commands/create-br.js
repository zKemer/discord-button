// require Nuggies
const Nuggies = require('nuggies');
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	const brmanager = new Nuggies.buttonroles();

	const filter = m => m.author.id === message.author.id;

		const colors = ['grey', 'gray', 'red', 'blurple', 'green'];

		 const role = args[0];
		if (!role) return message.channel.send('Invalid role');

		const color = colors.find(color => color == args[1]);
		if (!color) return message.channel.send('Invalid color');

		const label = args.slice(2).join(" ")


		const final = {
			role, color, label, emoji: null,
		};
		brmanager.addrole(final);

			const embed = new Discord.MessageEmbed()
				.setTitle('Butoncu Bot')
				.setDescription(':flag_tr: Kayıt olmak için aşağıdaki butona tıklayın. \n:flag_ac: Please, click on button to register.')
				.setColor('RANDOM')
			Nuggies.buttonroles.create({ message, content: embed, role: brmanager, channelID: message.channel.id })

};

module.exports.config = {
	name: 'button',
	description: 'Creates button role!',
	usage: '?create-br',
	botPerms: [],
	userPerms: ['MANAGE_GUILD'],
	aliases: [],
};