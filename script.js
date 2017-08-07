// The first line of the file always identifies the Angular module. This module is named "shoppingList".
angular.module("toDoList", [])
// This line creates a controller named "toDoListController". $scope is a parameter with a special name.
// Angular will automatically create a scope object and pass it to this parameter.
.controller("toDoListController", function($scope) {
    /* All of the code in this entire controller function runs as soon as the page loads.
       Here we set up any initial data (aka. scope, model) as well as any functions
       that we need to trigger from events in the HTML. */

    // Add items to the scope (model) so they're accessible in the HTML (view).
    // $scope.items in the controller is {{items}} in the HTML.
    /*$scope.items = [
	//can use above if want a default item to display first time site is visited
    ];*/

    // This function needs to go on the scope (model) so it can be called via ng-submit in the HTML (view).
    $scope.addItem = function(item) {
        $scope.items.push(item);
        clearForm();

        // This line is just plain JavaScript. Set focus to the task input.
        document.querySelector("input[ng-model='formItem.task']").focus();
    };
//code below adds check box in front of text 
/*	function addItem(){
        var ul = document.getElementById('ul'); //ul
        var li = document.createElement('li');//li
        
        var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = 1;
            checkbox.name = "todo[]";
        
        li.appendChild(checkbox);
        
        var text = document.getElementById('texto');
        li.appendChild(document.createTextNode(text.value));
        ul.appendChild(li); 
}
    var button = document.getElementById('btn');
    button.onclick = addItem */
	
    // This function needs to go on the scope (model) so it can be called via ng-click in the HTML (view).
    $scope.removeItemAt = function(index) {
        $scope.items.splice(index, 1);
    }

   
    function clearForm() {
        $scope.formItem = { Date: "", Task: null };
    }

    // All of the code in this entire controller function runs as soon as the page loads.
    // We call clearForm to set up the starting state of the page.
    clearForm();

});
