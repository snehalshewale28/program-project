var app=angular.module("myMod",[]);

app.controller("myctrl",function($scope,$interval){

$scope.count = 0;

$scope.myfun=function(){

$interval(function() {$scope.count++;}, 1000);

}

$interval(function() {$scope.dateAndTime=Date();}, 1000);

});

