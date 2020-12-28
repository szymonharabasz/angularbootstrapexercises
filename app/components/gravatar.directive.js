angular.module('ContactManager').directive('gravatar', function() {
    return {
        restrict: 'AE',
        template: '<img data-ng-src="{{img}}" class="{{class}}">',
        replace: true,
        link: function(scope, elem, attrs) {
            var size = (attrs.size) ? attrs.size : 64;
            scope.img = 'http://gravatar.com/avatar/'+MD5(attrs.email)+'?s='+size;
            scope.class = attrs.class;
        }
    }
});