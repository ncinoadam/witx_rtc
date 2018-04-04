/**
 * Notice we retrieve the module defined in main
 * If you want to create a new module be sure to add the 2nd parameter []
 */

var app = angular.module('RealTimeChat');

app.controller('ChatController', function($scope, $http) {
    var vm = this;
    vm.chatList = [];
    vm.name = "MyName"+Math.floor(Math.random() * Math.floor(1000));
    vm.message = "";
    vm.init = init;
    vm.submit = submit;

    //init will get called vai data-ng-init in homepage.ejs once the controller loads
    function init() {
        //Initialize the socket connection
        io.socket.get('/chat/addmessage');

        //Grab the current chat history, this works because Sails creates a CRUD interface for chat (CREATE, READ, UPDATE, DEL)
        $http.get('/chat')
            .then(function(data) {
                vm.chatList = data.data;
            }, function(error) {
                console.error("ERROR: " + error);
            })
    }

    //Called when submit button is clicked
    function submit() {
        if(vm.message && vm.message.length > 0) {
            var data = {
                username: vm.name,
                message: vm.message,
                datetime: new Date()
            }

            sendMessage(data);
        }
    }

    function sendMessage(data) {
        io.socket.post('/chat/addmessage/', data);
        vm.message = "";
    }

    //subscribe to new events
    io.socket.on('chat', function(obj) {
        if(obj.verb === 'created') {
            vm.chatList.push(obj.data);
            $scope.$digest();
        }
    });
});