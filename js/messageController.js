function messageController($scope, MessageF) {
    MessageF.getMessage()
        .then((response) => {
        $scope.message = response.data.message;
        })
}
messageController.$inject = ["$scope", "messageFactory"];
export default messageController;

class Foo {
    constructor(x) {
        this.x = x;
        this.y = 432;
    }

    point() {
        return 'Foo(' + this.x + ', ' + this.y + ')';
    }
}



