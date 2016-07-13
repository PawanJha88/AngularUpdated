angular.module("users")
    .controller("usersCtrl", ["$scope", "users", function ($scope, users) {

        // $scope.users = userService.getUsers();
        $scope.tableName = "User Details";
        $scope.users = users.data;
        /*userService.getUsersFromJson()
            .then(function (response) {
                console.log(response);
                setTimeout(function () {
                    $scope.users = response.data;
                    $scope.$apply();
                }, 10000);


            }).catch(function (response) {
                console.log(response);
                $scope.errorDisplay = "Error Occured"
            });
*/
        console.log("Hey i am async");

}]);
