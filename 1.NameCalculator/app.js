(function () {
    'user strict';

    angular.module('NameCalc', [])

    .controller('NameCalcController', function($scope){
        $scope.name = "";
        $scope.value = 0;
        $scope.displayNum = function() {
            var totalnamevalue = 
            calculateNumericForString($scope.name);
            $scope.value = totalnamevalue;
        }
    });
})();

function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (let index = 0; index < string.length; index++) {
        totalStringValue += string.charCodeAt(index);
    }
    return totalStringValue;
}