/* simple utility module to store messages */
module.exports = {
  messages: [],
  getMessages() {
    return this.messages;
  },
  setMessages(newMessage) {
    this.messages = [...this.messages, newMessage];
  },
};
