describe("Unit tessting User list controller", function () {
    var scope;

    beforeEach(function () {
        module("app");
    });

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller("userListCtrl", {
            $scope: scope
        });
    }));

    it("scope should not be null", function () {
        expect(scope).toBeDefined();
    });

    it("scope.users should not be null", function () {
        expect(scope.users).toBeDefined();
        expect(scope.users.length).toBe(2);
    });
    it("scope.addUser should add the user to the list", function () {

    });
});
