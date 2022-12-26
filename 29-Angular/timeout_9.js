var app=angular.module("myMod",[]);

app.controller("myctrl",function($scope,$timeout){

$scope.name ="learningnew thing";

$timeout(function(){$scope.name="function is on";},4000);

});



