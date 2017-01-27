describe('Controllers', function(){
    var scope;

    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    it('should have enableFriends property set to true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });

    it('should have listFriends property set to true', function(){
        expect(scope.settings.listFriends).toEqual(true);
    });

});
