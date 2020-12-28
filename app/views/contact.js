angular.module('ContactManager').controller('contactController', function($scope, $routeParams, contacts, $timeout) {
    $scope.contact = contacts.find($routeParams.id);
    $scope.$on('saved', function () {
        $timeout(function() {
            $scope.contact.$update();
        }, 0);
    });
});