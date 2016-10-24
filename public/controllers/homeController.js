(function () {
	'use strict';
	angular
		.module('manager')
		.controller('homeController', homeController);

	function homeController($scope, $http) {
		$scope.dateString = "";
		$scope.dayBeforeMonth = false;

		$scope.result = {};
		$scope.result.year = "Empty";
		$scope.result.month = "Empty";
		$scope.result.day = "Empty";
		$scope.result.hour = "Empty";
		$scope.result.minute = "Empty";
		$scope.result.week_day = "Empty";
		$scope.result.full_date = "Empty";
		$scope.result.used_format = "Empty";

		$scope.submit = function () {
			var postData = {
				dateString: $scope.dateString,
				dayBeforeMonth: $scope.dayBeforeMonth
			};

			$http.post('http://127.0.0.1:3000/submit', postData)
				.success(function (data) {
					console.log(data);
					$scope.result.year = data.year;
					$scope.result.month = data.month;
					$scope.result.day = data.day;
					$scope.result.hour = data.hour;
					$scope.result.minute = data.minute;
					$scope.result.week_day = data.week_day;
					$scope.result.full_date = data.full_date;
					$scope.result.used_format = data.used_format;
				})
				.error(function (data) {
					alert('Failed to parse the requested date')
				});
		};
	};

})();
