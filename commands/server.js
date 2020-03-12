const ms = require("../minestat")
require("dotenv").config()

module.exports = {
  name: '!server',
  description: 'Checks whether or not server is on',
  execute(msg, args) {
    ms.init(process.env.ADDRESS, 25565, (result) => {
      if(ms.online) {
        msg.reply("The server is currently online")
      } else {
        msg.reply("The server is offline")
      }
    })
  },
};

