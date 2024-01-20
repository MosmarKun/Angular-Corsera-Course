(function () {
    'user strict';

    angular.module('messageApp', [])

    .controller('Controller', function($scope){
        $scope.message = "Please enter data first";
        $scope.newMessage = "None";

        $scope.doChangeMessage = function(){
            $scope.newMessage = $scope.message;
            if(!$scope.message == ""){
                items = $scope.message.split(","); 
                if(items.length <= 3){
                    $scope.newMessage ="Enjoy!"
                }
                else{
                    $scope.newMessage ="Too much!"
                }
            }
            else{
                $scope.newMessage = "Please enter data first";  
            }

        };
    });
})();
