(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function(response) {
        $scope.people = response.data;
      });
    }; // end of setup function

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    };

    $scope.addPerson = function(newName, newBio) {
      if (newName && newBio) {
        var newPerson = {
                          name: newName,
                          bio: newBio,
                          bioVisible: false
                        };

        $scope.people.push(newPerson);
        $scope.formName = null;
        $scope.formBio = null;
      }
    };

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    };
  });
}());

