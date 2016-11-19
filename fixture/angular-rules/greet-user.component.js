angular.module('myApp').
    component('greetUser', {
        template: 'Hello, {{$ctrl.user}}!',
        controller: function GreetUserController() {
            this.user = 'world';
        }
    });