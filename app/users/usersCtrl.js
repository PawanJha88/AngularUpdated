angular.module("users")
    .controller("usersCtrl", ["$scope", "userService", function ($scope, userService) {

        $scope.users = userService.getUsers();

}]);
