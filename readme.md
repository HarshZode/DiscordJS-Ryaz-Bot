# 🤖 Ryaz Discord Bot

A discord bot built with discord.js which will manage your member's coins and save all the logs!



## 💎Requirements
- Discord Bot Token [Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

- Node.js v18.7.0 or newer

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
 

## Commands

- /help
- /documentation
- /ping
- /server
- /createwallet
- /addcoins
- /mycoins
- /sendcoins
- /removenonspendablecoins
- /removespendablecoins
- /showhistory
- /showuserhistory
- /showuserbalance
- /introduce
- /findintroduction
- !introduce (in development)

## 🚀 Getting Started



```bash
  git clone https://github.com/HarshZode/DiscordJS-Ryaz-Bot
```

```bash
  npm install node @discordjs/rest dotenv mongoose
```
Once all the packages are installed, open `env` file and fill out the values.

⚠️**Note: Never commit or share your token or api keys publicly**⚠️

```env
DISCORD_BOT_TOKEN= paste_bot_token_here
BOT_ID = paste_bot_id_here
SERVER_ID = paste_server_id_here
WELCOME_CHANNEL_ID = paste_channel_id_here
USER_ID_WHO_CAN_ADD_COINS = paste_user_id_here
COMMON_ROLE_ID = paste_role_id_here
MONGODB_LINK = mongodb_link_here
```
After that, open `deploy-commands.js` and run `node ./deploy-commands.js`

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006833131380289657/unknown.png)

### **Note: Everytime you make changes in this file, make sure to run `node ./deploy-commands.js`**

You can also add your [slash commands](https://discordjs.guide/interactions/slash-commands.html#registering-slash-commands) to this bot.

Once you have filled the values, open terminal and use `node .` to run the bot

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006833402974056458/unknown.png)


⚠️**Note: [Validate](https://www.mongodb.com/docs/atlas/data-federation/tutorial/add-ip-address/) your IP Address in your MongoDB server**⚠️

And your bot is ready to go !

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006833647048982618/unknown.png)

#### You can also change the image shown in the embed by simply editing `iconURL` in `src/embeds.js`

## 📝 Features & Commands In Details
- Sends a welcome message in the channel once a new user joins

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006813152937259049/unknown.png)

### - `/help` Shows all commands of the bot 

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011552615236112494/unknown.png)

### - `/documentation` Sends a link to the documentation of the bot 

![App Screenshot](https://cdn.discordapp.com/attachments/838637875636600865/1011239599915401247/unknown.png)

### - `/ping` Displays API Latency

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006813461243760662/unknown.png)

### - `/createwallet` Creates the wallet for the user
Note: The user must have the same role which was added to `.env` file

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011508881006018620/unknown.png)

### - `/addcoins` 
#### Note: This command can be used by the user who's `Discord Id` is filled in place of `USER_ID_WHO_CAN_ADD_COINS` in `.env` file

This command as 2 options, add coins to user or add coins to users having a specific role.

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006818486636515389/unknown.png)

You must select only one option among these options.

####  Adding coins to a user 
   Add the amount of coins you want to add and select the user in user options 

![App Screenshot](https://media.discordapp.net/attachments/1006813112038608896/1006818806074703882/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006818652533817395/unknown.png)

####  Adding coins everyone having a specific role

Add the amount of coins you want to add and select the role in role option.


![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006819026602819584/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006819085264375819/unknown.png)

### - `/mycoins`

Shows available coins of the user

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011519130408587345/unknown.png)



### - `/sendcoins`

Send your coins to other user.

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006823642165936199/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006824815627345920/unknown.png)

#### Note: It will also mention the user who has the permission to add coins for keeping the track of the coin transfer done between the users.

### - `/removenonspendablecoins`

This command will remove unusablecoins from the user's wallet

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011514344401547346/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011514284032917504/unknown.png)

#### Note: Only user who as permission to add coins can use this command

### - `/removespendablecoins`

This command will remove usablecoins from the user's wallet

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011517789288280084/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011517374601641995/unknown.png)

#### Note: Only user who as permission to add coins can use this command

### - `/showhistory`

This command will show you all the coin transfers done till now.

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006825080975798352/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006825152434159716/unknown.png)

### - `/showuserbalance`

This command will show you user's available coins

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011241168174063696/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011240703902371840/unknown.png)

#### Note: Only user who as permission to add coins can use this command

### - `/showuserhistory`

This command will show you user's coin transfer history

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1011241577370353745/unknown.png)

#### Note: Only user who as permission to add coins can use this command

### - `/introduce`

Introduce yourself to the member's of the server

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1007188676045975612/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1007188720966971412/unknown.png)

### - `/findintroduction`

Find user's introduction

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1007193012687867914/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1007193067213815888/unknown.png)

⚠️**Note: Only user's with `COMMON_ROLE` can use this command** ⚠️ 


![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1007201814984269865/unknown.png)

### - `!introduce` ⚠️ Note: This command can be used but it is still in development.⚠️

Using this command, new users can introduce themself to other user's in server.
The bot will ask a series of questions to the user and after the user answers all the questions, the bot will save his introduction.

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006848117083209879/unknown.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1006813112038608896/1006850359215525909/unknown.png)

#### Note: This command can be used but it is still in development.
