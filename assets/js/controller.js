angular.module('demo',[]).controller('Application', function Application($scope) {
    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    }
});