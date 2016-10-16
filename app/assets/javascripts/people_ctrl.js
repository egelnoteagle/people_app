(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
                      {
                        name: "Strong Bad",
                        bio: "He types on the compy.",
                        bioVisible: false
                      },
                      {
                        name: "The Cheat",
                        bio: "He's the man, well not a man, but he was still tragdor.",
                        bioVisible: false
                      },
                      {
                        name: "Homestar",
                        bio: "He probably walked",
                        bioVisible: false
                      }
                    ];

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

