var angularApp = angular.module('AngularApp', ['swapi','angularUtils.directives.dirPagination']);
angularApp.controller('MainCtrl', [
    '$scope',
    'SwapiService',
    function($scope, SwapiService){

        SwapiService.people()
            .then(function(data) {
                $scope.data = data.data.results;
                angular.forEach($scope.data, function(value, key)

                {
                    if(value.gender == "male"){
                        value.color = 'blue';
                        return {
                            value
                        }
                    }
                    {
                        if(value.gender == "female"){
                            value.color = 'red';
                            return {
                                value
                            }
                        }

                    }
                    {
                        if(value.gender == "n/a"){
                            value.color = '#ababab';
                            value.gender='Not available';
                            return {
                                value
                            }
                        }

                    }

                })
            });

    }
]
);


angularApp.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});




