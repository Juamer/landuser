// Iniciar app
var ngapp = angular.module("landuser", []);
// Controlador principal
ngapp.controller("Propietario", function ($scope, $http) {
    // Declarar variables
    $scope.propietario = {
        nombre: "Angel Hurtado"
    };
    $scope.proyectos = [
        { titulo: "UTZAC-SATM", src: "http://167.99.105.41/utzac-satm-ui"}
    ];
});