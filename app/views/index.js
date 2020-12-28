angular.module('ContactManager').controller('indexController', function($scope, contacts, $alert) {
    var deletionAlert = $alert({
        title: 'Sukces!',
        content: 'Kontakt został pomyślnie usunięty!',
        type: 'succses',
        container: '#alertContainer',
        show: false
    });

    $scope.contacts = contacts.get();
    $scope.delete = function(index) {
        contacts.destroy($scope.contacts[index].id);
        $scope.contacts.splice(index, 1);
        deletionAlert.show();
    };
});