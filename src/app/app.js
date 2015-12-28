(function(){

    angular.module('Mathematics', ['ngMaterial']);

    angular.module('Mathematics').config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('grey')
            .dark();
    });
}());
