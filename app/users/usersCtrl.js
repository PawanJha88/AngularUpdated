angular.module("users")
    .controller("usersCtrl", ["$scope", "userService", function ($scope, userService) {

        // $scope.users = userService.getUsers();
        $scope.tableName ="User Details";
        userService.getUsersFromJson()
            .then(function (response) {
                console.log(response);
                $scope.users = response.data;

            }).catch(function (response) {
                console.log(response);
                $scope.errorDisplay = "Error Occured"
            });

        console.log("Hey i am async");

}]);
