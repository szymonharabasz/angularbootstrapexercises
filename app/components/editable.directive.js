angular.module('ContactManager').directive('editable', function () {
    return {
        restrict: 'AE',
        templateUrl: '/assets/partials/editable.html',
        scope: {
            value: '=editable',
            field: '@fieldType'
        },
        controller: function ($scope) {
            $scope.editor = {
                showing: false,
                value: $scope.value
            };
            $scope.toggleEditor = function () {
                $scope.editor.showing = !$scope.editor.showing;     
                $scope.editor.value = $scope.value;   
            };
            $scope.field = ($scope.field) ? $scope.field : 'text';
            $scope.save = function () {
                $scope.value = $scope.editor.value;
                $scope.toggleEditor();
                $scope.$emit('saved');
            }
        }
    };
});