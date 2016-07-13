angular.module("components")
    .filter("greaterThan", [function () {
        return function (input, criteria) {

            var filteredOutput = [];
            angular.forEach(input, function (item) {
                if (parseInt(item.price) > parseInt(criteria)) {
                    filteredOutput.push(item);
                }
            });

            if (criteria)
                return filteredOutput;
            else
                return input;
        }

}]);
