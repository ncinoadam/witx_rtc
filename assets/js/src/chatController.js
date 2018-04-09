// Retrieve the main module to register controller against
var app = angular.module('RealTimeChat');

// Define the controller
app.controller('ChatController', function($scope, $http) {
	// Scope aliasing :)
	var vm = this;

	// Controller data
	vm.messages = [];
	vm.name = "MyName" + Math.floor(Math.random() * Math.floor(1000));
	vm.message = "";

	// Public controller methods
	vm.init = init;
	vm.submit = submit;

	vm.init();

	function init() {
		// Initialize the socket connection
		io.socket.get('/chat/addmessage');

		// Grab the current chat history, this works because Sails creates a CRUD interface for chat (CREATE, READ, UPDATE, DEL)
		$http.get('/chat').then(function(data) {
			vm.messages = data.data;
		}, function(error) {
			console.error("ERROR: " + error);
		});
	}

	function submit() {
		// Send message using user's input
		if (vm.message && vm.message.length > 0) {
			var data = {
				username: vm.name,
				message: vm.message,
				datetime: new Date()
			};

			sendMessage(data);
		}
	}

	function setScrollPosition() {
		// Set scroll position to latest message
		var chat = document.getElementById("chat-window");
		chat.scrollTop = chat.scrollHeight;
	}

	function sendMessage(data) {
		// Send the message through the websocket
		io.socket.post('/chat/addmessage/', data);

		// Reset message text
		vm.message = "";
	}

	// Subscribe to new server-side events (real-time updates)
	io.socket.on('chat', function(obj) {
		if(obj.verb === 'created') {
			vm.messages.push(obj.data);
			$scope.$digest();
			setScrollPosition();
		}
	});
});