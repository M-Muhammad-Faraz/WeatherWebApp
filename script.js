// var hello;

// const obj = { data: [] };

// async function getWeather(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data.list);
// }

// getWeather(
//   "https://api.openweathermap.org/data/2.5/forecast?q=islamabad&appid=96dea4748c706dbd239acaf5fccee21a&units=imperial&mode=json"
// );

const app = angular.module("my-app", []);
app.filter("ceil", function () {
  return function (input) {
    return Math.ceil(input);
  };
});
app.controller("app-controller", ($scope, $http) => {
  $scope.Math = window.Math;
  $scope.getWeather = (query = "islamabad") => {
    $http({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=96dea4748c706dbd239acaf5fccee21a&units=imperial&mode=json`,
    }).then(function successCallback(response) {
      const data = response;
      console.log(data);
      $scope.city = data.data.city.name;
      $scope.weatherList = data.data.list;
      $scope.datatime = data.data.dt_text;
    });
  };

  $scope.getWeather();
});
// const web = document.querySelector(".main");

// web.style.background = "url(./Assets/Cloudy.jpg)";
// console.log(app);
