angular.module('starter.controllers', ['ionic', 'ngMaterial', 'ion-alpha-scroll'])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats, $ionicTabsDelegate) {
//        $scope.$on('$ionicView.enter', function(e) {
//        });

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };

        $scope.onSwipeRight = function (index) {
            $scope.selectedIndex = 3;//Math.min($scope.data.selectedIndex + 1, tabs.length - 1);
        };
//
//        $scope.$watch('selectedIndex', function (current, old) {
//            $ionicTabsDelegate.select(current);
//        });
//
//        $scope.onSwipeLeft = function (index) {
//            alert("Swiped left at index " + index);
//        };

        var tabs = [
                {
                    title: 'Mon',
                    content: "Monday's Schedule",
                    disabled: false
                },
                {
                    title: 'Tue',
                    content: "Tuesday's Schedule",
                    disabled: false
                },
                {
                    title: 'Wed',
                    content: "Wednesday's Schedule",
                    disabled: false
                },
                {
                    title: 'Thu',
                    content: "Thursday's Schedule",
                    disabled: false
                },
                {
                    title: 'Fri',
                    content: "Friday's Schedule",
                    disabled: false
                }
    ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
        $scope.$watch('selectedIndex', function (current, old) {
            previous = selected;
            selected = tabs[current];
        });
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

.controller('TeacherListCtrl', function ($scope, TeachersData) {
    $scope.data = TeachersData.all();
    $scope.settings = {
        enableFriends: true
    };
    $scope.Alert = function(str){
        alert(str);
    }
    $scope.$on('$ionicView.enter', function(e) {
        $scope.filteredResults = $scope.data.results;
    });

    $scope.searchText = "";
    $scope.searchQuery = [];

    $scope.lastQuery = "";
    $scope.queryMatches = function (query) {
        if($scope.lastQuery != "")
            if(query.length < $scope.lastQuery.length)
                $scope.filteredResults = $scope.data.results;
        var arr = [];
        var tmp = [];
        for (var i = 0; i < $scope.filteredResults.length; i++) {
            var fname = $scope.filteredResults[i].firstName;
            var lname = $scope.filteredResults[i].lastName;
            if (fname.toLowerCase().indexOf(("" + query).toLowerCase()) == 0 ||
                lname.toLowerCase().indexOf(("" + query).toLowerCase()) == 0){
                arr.push($scope.filteredResults[i].name + "");
                tmp.push($scope.filteredResults[i])
            }
        }
        $scope.lastQuery = query;
        $scope.filteredResults = tmp;
        console.log("Saagar: " + $scope.filteredResults.length)
        $scope.searchQuery = arr;
    };
    $scope.showDivider = function (index) {
        if (index == 0) return true;
        if (index != $scope.data.results.length - 1 && index > 0)
            if ($scope.data.results[index].lastName.charAt(0) != $scope.data.results[index - 1].lastName.charAt(0))
                return true;
    }

});
