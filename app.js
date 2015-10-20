var myApp = angular.module('myApp', []);

myApp.controller('Ctrl1', ['$scope',  function($scope) {
    console.log('hello');
    $scope.testing='hello';
}]);
