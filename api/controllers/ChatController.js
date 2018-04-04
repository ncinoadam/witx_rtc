/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 */

module.exports = {
	addMessage: function(req, res) {
        var client_data = req.params.all();
        if(req.isSocket && req.method === 'POST') {
            //Add a new conversation, this is from an already connected client
            Chat.create(client_data).exec(function(error, client_data) {
                Chat.publishCreate({
                    id: client_data.id,
                    message: client_data.message,
                    username: client_data.username,
                    datetime: client_data.datetime
                })
            })
        }
        else if(req.isSocket) {
            //Subscribe this client
            Chat.watch(req.socket);
            console.log("New User Subscribed to: " + req.socket.id);
        }
    }
};

