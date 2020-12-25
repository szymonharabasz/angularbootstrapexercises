angular.module('ContactManager',[]).controller('Application', function Application($scope) {
    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;g
    }
    $scope.contacts = [
        {
            name: 'Janko Walski',
            phone: '01234567890',
            email: 'janko@walski.com'
        },
        {
            name: 'Karen Nerka',
            phone: '09876543210',
            email: 'karenne@email.com'
        }
    ];
    $scope.styleDemo = function() {
        if (!$scope.styler) {
            return;
        }
        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
})
.filter('truncate', function() {
    return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit)+'...' : input;
    };
});