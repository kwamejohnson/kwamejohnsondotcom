var app = angular.module('kjAp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/about', {
      templateUrl: "aboutme.html"
      // templateUrl: "./static/partials/aboutme.html"
      // templateUrl: '../partials/aboutme.html'
    })
    .when('/cv', {
      templateUrl: "cv.html"
      // templateUrl: "./static/partials/aboutme.html"
      // templateUrl: '../partials/aboutme.html'
    })
    .when('/technologies', {
      templateUrl: "technologies.html"
      // templateUrl: "./static/partials/aboutme.html"
      // templateUrl: '../partials/aboutme.html'
    })
    .when('/projectsandtechnologies', {
      templateUrl: "projectsandtechnologies.html"
      // templateUrl: "./static/partials/aboutme.html"
      // templateUrl: '../partials/aboutme.html'
    })
    .when('/bucketlist', {
      templateUrl: "codingBucketlist.html"
      // templateUrl: "./static/partials/aboutme.html"
      // templateUrl: '../partials/aboutme.html'
    })
    .otherwise({
      redirectTo: "/"
    });
});
