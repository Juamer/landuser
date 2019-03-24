// Iniciar app
var ngapp = angular.module("landuser", []);
// Controlador principal
ngapp.controller("Propietario", function ($scope, $http) {
    // Declarar variables
    $scope.propietario = {
        nombre: "Juan Pablo"
    };
    $scope.proyectos = [
        { titulo: "UTZAC-VC", src: "http://167.99.105.41/utzac-vc"}
    ];
});