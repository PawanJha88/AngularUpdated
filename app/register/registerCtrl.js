angular.module("register")
    .controller("registerCtrl", ["$scope", function ($scope) {
        $scope.user = {};
        $scope.registerUser = function () {
            $scope.user.country = $scope.selectedCountry.code;
            console.log($scope.user);
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
