(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunch = "";

        $scope.checkItems = function () {

            if ($scope.lunch.length == 0) {
                $scope.message = "What? Do you think you are a super model? Open your mouth! Please enter data first.";
                return
            }

            var lunchSize = $scope.lunch.split(',').length;

            if (lunchSize <= 3) {
                $scope.message = "Enjoy!"
            } else {
                $scope.message = "Too much!!"

            }

        }
    }

})();
