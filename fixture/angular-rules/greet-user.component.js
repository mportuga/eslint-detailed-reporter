angular.module('myApp').
    component('greetUser', {
        template: '<strong>Hello, {{$ctrl.user}}!</strong>',
        controller: function GreetUserController() {
            this.user = 'world';
        }
    });