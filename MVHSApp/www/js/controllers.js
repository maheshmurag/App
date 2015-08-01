angular.module('starter.controllers', ['ionic','ngMaterial'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

    var tabs = [
        { title: 'Mon', content: "Monday's Schedule", disabled: false},
        { title: 'Tue', content: "Tuesday's Schedule", disabled: false},
        { title: 'Wed', content: "Wednesday's Schedule", disabled: false},
        { title: 'Thu', content: "Thursday's Schedule", disabled: false},
        { title: 'Fri', content: "Friday's Schedule", disabled: false}
    ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
        previous = selected;
        selected = tabs[current];
    });
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
