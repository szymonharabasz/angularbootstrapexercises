angular.module('ContactManager').controller('addController', function($scope, contacts, $alert) {
    var alert = $alert({
        title: 'Sukces!',
        content: 'Kontakt został pomyślnie dodany',
        type: 'success',
        container: '#alertContainer',
        show: false
    });

    $scope.contact = contacts.create();
    $scope.submit = function () {

        console.log($scope.contact);

        $scope.contact.$save();
        $scope.contact = contacts.create();
        alert.show();
    }
});