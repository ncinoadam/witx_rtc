/**
 * Notice we retrieve the module defined in main
 * If you want to create a new module be sure to add the 2nd parameter []
 */

var app = angular.module('RealTimeChat');

app.controller('ChatController', function($scope, $http, $location) {
    $scope.chatList = [];
    $scope.name="MyName"+Math.floor(Math.random() * Math.floor(1000));
    $scope.message = "";

    //init will get called vai data-ng-init in homepage.ejs once the controller loads
    $scope.init = function() {
        //Initialize the socket connection
        io.socket.get('/chat/addmessage');

        //Grab the current chat history, this works because Sails creates a CRUD interface for chat (CREATE, READ, UPDATE, DEL)
        $http.get('/chat')
            .then(function(data) {
                console.log(data.data);
                $scope.chatList = data.data;
            }, function(error) {
                console.log("ERROR: " + error);
            })
    }

    //Called when submit button is clicked
    $scope.submit = function() {
        if($scope.message && $scope.message.length > 0) {
            var data = {
                username: $scope.name,
                message: $scope.message,
                datetime: new Date()
            }
            
            sendMessage(data);
        }
    }

    function sendMessage(data) {
        io.socket.post('/chat/addmessage/', data);
        $scope.message = "";
    }

    //subscribe to new events
    io.socket.on('chat', function(obj) {
        if(obj.verb === 'created') {
            $scope.chatList.push(obj.data);
            $scope.$digest();
        }
    });
});