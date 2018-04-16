var app = angular.module("myapp", []);
app.controller("DrListController", ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'clinicname':'',
            'specname':'',
            'phone':'',
            'fax':''
        
        }];
    
        $scope.addNew = function(personalDetail){
            $scope.personalDetails.push({ 
                'clinicname': "",
                'specname':"",
                'phone': "",
                'fax': "",
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.personalDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.personalDetails = newDataList;
        };
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };    
}])

app.controller("Diagnosis", ['$scope', function($scope) {
    $scope.diags = [
        {
            'date':'',
            'diagnosis':'',
            'bwhom':''

        }];
    
        $scope.addNew = function(diag){
            $scope.diags.push({ 
                'date':'',
                'diagnosis':'',
                'bywhom':''
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.diags, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.diags = newDataList;
        };
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
      } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.diags, function(diag) {
            diag.selected = $scope.selectedAll;
        });
    };    
}]);
app.controller("medication", ['$scope', function($scope) {
    $scope.meds = [
        {
            'name':'',
            'use':'',
            'dosage':'',
            'special':''

        }];
    
        $scope.addNew = function(med){
            $scope.meds.push({ 
                'name':'',
                'use':'',
                'dosage':'',
                'special':''
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.meds, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.meds = newDataList;
        };
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
      } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.meds, function(diag) {
            diag.selected = $scope.selectedAll;
        });
    };    
}]);