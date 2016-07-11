angular.module("flipzon")
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.companyName = "FlipZon";
        $scope.navBarUrl = 'app/common/navbar.html';
        $scope.contentUrl = "app/home/home.html";

        $scope.loadContent = function (name) {
            if (name == 'login') {
                $scope.contentUrl = "app/login/login.html"
            } else if (name == "register") {
                $scope.contentUrl = "app/register/register.html"
            } else {
                $scope.contentUrl = "app/home/home.html";
            }
        };

    }]);
