const ms = require("../minestat")
require("dotenv").config()

module.exports = {
  name: '!server',
  description: 'Checks whether or not server is on',
  execute(msg, args) {
    ms.init("98.201.44.253", 25565, (result) => {
      if(ms.online) {
        msg.reply("The server is currently online")
      } else {
        msg.reply("The server is offline")
      }
    })
  },
};

