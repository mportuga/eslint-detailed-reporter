angular.module('myApp')
    .controller('GreetUserController', function GreetUserController($scope) {
        var users = [{name:'world'}, {name:'earth'}, {name:'planet'}, {name:'mars'}];

        findFirstUser();

        function findFirstUser() {
            $scope.user = _.first(users.map(function(user) {
                return user.name;
            }));
        }
    })
    .directive('greetUser', function(){
        return {
            restrict: 'E',
            replace: true,
            template: '<h1>Hello, {{user}}!</h1>',
            controller: 'GreetUserController'
        };
    });