angular.module("flipzon", ["home", "users", "register", "components", 'ui.router']);

angular.module("flipzon")
    .config(["$stateProvider", function ($stateProvider) {
        var home = {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl",
            params: {
                userDetails: ""
            }
        };
        var login = {
            templateUrl: "app/login/login.html"
        };
        var users = {
            templateUrl: "app/users/users.html",
            resolve: {
                users: function (userService) {
                    return userService.getUsersFromJson();
                    /* userService.getUsersFromJson().then(function (response) {
                         return "Hey";
                     }).catch(function (response) {
                         return "howr";
                     });*/
                }
            },
            controller: "usersCtrl"
        };
        var register = {
            templateUrl: "app/register/register.html"
        }
        $stateProvider.state("home", home);
        $stateProvider.state("login", login);
        $stateProvider.state("users", users);
        $stateProvider.state("register", register);

}])
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                console.log("change state")
            });
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams, options) {
                console.log("Stage change complete");
            });
    })
