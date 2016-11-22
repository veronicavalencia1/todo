angular.module("proye",[])
   .controller('proye', function($scope, $filter){
    $scope.title = 'Local Storage Page';
    $scope.newTodo = '';
    $scope.todo = [];
    if(localStorage.getItem("todo")){
      var localTodoToJson = JSON.parse(localStorage.getItem("todo"));
      $scope.todo = localTodoToJson;
    }

    $scope.addTodo = function () {
      $scope.todo.push({ name: $scope.newTodo});
      var localTodo = JSON.stringify(angular.copy($scope.todo));
      localStorage.setItem("todo", localTodo);
      $scope.newTodo = '';
    }

    $scope.removeAllTodo = function(){
      $scope.todo = [];
      localStorage.setItem("todo", '');
    }

    $scope.removeItemTodo = function(index){
      $scope.todo.splice(index, 1);
      var localTodo = JSON.stringify(angular.copy($scope.todo));
      localStorage.setItem("todo", localTodo);
    }
  }
);
