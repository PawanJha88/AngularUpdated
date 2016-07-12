angular.module("components")
    .directive("customTable", [function () {
        return {
            restrict: "A",
            templateUrl: "app/components/customtable.html",
            scope: {
                heading: "@", //one way communication,
                tabledata: "="
            }
        }
}]);
