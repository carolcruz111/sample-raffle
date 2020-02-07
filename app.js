var app = angular.module('app', []).controller('RaffleCtrl', function($scope) {
  $scope.names = [];
  
  $scope.AddName = function(name){
    $scope.flag = true;
    $scope.names.map((a,b)=>{
      if(a==name){
        $scope.flag = false;
      }
    });

    if($scope.flag){
      $scope.names.push(name);
    }else{
      alert(name + " already exist.");
    }
    console.log(name);
  };

  $scope.StartRaffle = function(){

    $scope.selectedname = $scope.names[Math.floor(Math.random() * $scope.names.length)];
    alert("Winner - " + $scope.selectedname);
    $scope.names.map((a,b)=>{
      console.log(a + " - " + $scope.selectedname);
      if(a==$scope.selectedname){
        $scope.names.splice(b,1);
      }
    });
    $scope.name = null;

  };
});