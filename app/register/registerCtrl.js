angular.module("register")
    .controller("registerCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.user = {};
        $scope.registerUser = function () {
            $scope.user.country = $scope.selectedCountry.code;
            console.log($scope.user);
            $state.go("home", {
                userDetails: $scope.user
            });
        };

        $scope.countries = [{
                name: "India",
                code: "IN"
            },
            {
                name: "Canada",
                code: "CA"
            }]
}]);
