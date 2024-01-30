(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
var childshoppingList = [
  "Milk", "Donuts", "Cookies", "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('ChildShoppingListController', ChildShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList = shoppingList;
  $scope.pc = this;
  $scope.pc.shoppingList = shoppingList;

}
ChildShoppingListController.$inject = ['$scope'];
function ChildShoppingListController($scope) {
  $scope.shoppingList = childshoppingList;
  console.log($scope);
  console.log($scope.pc.shoppingList);

}

})();
