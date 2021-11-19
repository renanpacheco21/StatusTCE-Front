(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.paisesPage = paisesPage;
        vm.estadosPage = estadosPage;

        activate();

        function activate() {
        }

        function cidadesPage() {
            $location.path("/cidade");
        }
        function paisesPage() {
            $location.path("/pais");
        }
        function estadosPage() {
            $location.path("/estado");
        }
    }
})();