angular.module('ContactManager').filter('truncate', function() {
    return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit)+'...' : input;
    };
});
