angular.module("components")
    .directive("brandIcon", [function () {
        return {
            restrict: "A,E",
            template: '<img src="../images/logo.png" style="width:45px;height:45px">'
        };
}]);


angular.module("components")
    .directive("headerBar", [function () {
        return {
            restrict: "A",
            templateUrl: "app/common/navbar.html"
        };
}]);
