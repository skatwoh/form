var myApp = angular.module("form", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
    // Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    // Chuyển trang
    $routeProvider
        .when("/form", {
            templateUrl: "./form.html"
        })
        .otherwise({
            redirectTo: "/form"
        })

});