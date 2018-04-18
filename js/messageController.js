angular.module("app")
.controller("messageController", ["$scope", "messageFactory", function($scope, MessageF) {
    MessageF.getMessage()
        .then((response) => {
            $scope.message = response.data.message;
        })
}]);
class Foo {
    constructor(x) {
        this.x = x;
        this.y = 432;
    }

    point() {
        return 'Foo(' + this.x + ', ' + this.y + ')';
    }
}



