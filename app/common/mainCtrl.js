angular.module("flipzon")
    .controller("mainCtrl", ["$scope", function ($scope) {
        $scope.companyName = "FlipZon";
        $scope.navBarUrl = 'app/common/navbar.html';
        $scope.contentUrl = "app/home/home.html";
        $scope.cartItems = [];
        $scope.loadContent = function (name) {
            if (name == 'login') {
                $scope.contentUrl = "app/login/login.html"
            } else if (name == "register") {
                $scope.contentUrl = "app/register/register.html"
            } else if (name == "users") {
                $scope.contentUrl = "app/users/users.html"
            } else if (name == 'cart') {
                $scope.contentUrl = 'app/common/checkout.html';
            } else {
                $scope.contentUrl = "app/home/home.html";
            }
        };




        $scope.$watch("companyName", function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
        });

        $scope.$on("PRODUCTADDED", function (evt, args) {
            $scope.cartItems.push(args.item);
        });





    }]);
