function messageFactory($http) {
    var messageFactory = {};
    messageFactory.getMessage = function getMessage() {
        return $http({
            method: "GET",
            url: "http://localhost:4000/greet"
        })
    };
    return messageFactory;
}
messageFactory.$inject = ["$http"];

export default messageFactory;

