angular.module("components")
    .directive("ngAlphabets", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                element.bind("keypress", function (evt) {
                    var alphabetsRegex = RegExp(/^[A-Za-z. ]+$/);
                    if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122)) {

                    } else {
                        console.log("invalid");
                        evt.preventDefault();
                    }
                });
            }

        };
}]);
