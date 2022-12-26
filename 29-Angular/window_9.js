var app=angular.module("myMod",[]);

app.controller("myctrl",function($scope,$window){

$scope.DisplayAlert1 =function(){
$window.alert("hello world")}

$scope.DisplayAlert2 =function(name){
$window.alert("your name is: "+ name)}

$scope.DisplayPrompt = function(){

var fname = $window.prompt("Enter first name");
var lname = $window.prompt("Enter last name");

$window.alert("Your full name is:" +fname+" "+lname)}

});
