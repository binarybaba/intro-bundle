angular.module("app")
.controller("messageController", ["$scope", "messageFactory", function($scope, MessageF) {
    MessageF.getMessage()
        .then(function(response) {
            $scope.message = response.data.message;
        })
}]);
