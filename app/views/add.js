angular.module('ContactManager').controller('addController', function ($scope, contacts, $alert) {
    var alerts = {
        success: $alert({
            title: 'Sukces!',
            content: 'Kontakt został pomyślnie dodany',
            type: 'success',
            container: '#alertContainer',
            show: false
        }),
        error: $alert({
            title: 'Błąd!',
            content: 'Wystąpiły błędy w przetwarzaniu formularza!',
            type: 'danger',
            container: '#alertContainer',
            show: false
        })
    };

    $scope.contact = contacts.create();
    $scope.submit = function () {

        $scope.formErrors = false;

        if (!$scope.addForm.$valid) {
            $scope.formErrors = true;
            return alerts.error.show();
        }

        $scope.contact.$save();
        $scope.contact = contacts.create();
        alerts.success.show();
        alerts.error.hide();
    }
});