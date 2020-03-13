require("dotenv").config()

module.exports = {
  name: '!server',
  description: 'Checks whether or not server is on',
  execute(msg, args) {
    const ms = require("../minestat")
    ms.init(process.env.ADDRESS, 25565, (result) => {
      if(ms.online) {
        msg.reply("The server is currently online")
      } else {
        msg.reply("The server is offline")
      }
    })
  },
};

