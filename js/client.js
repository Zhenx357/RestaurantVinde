client = angular.module('client',['ui.router']);

client.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        
        .state('alacarte', {
            url: '/alacarte',
            templateUrl: 'partials/alacarte.html',
            controller: 'alacarteCtrl'    
        })
        
        .state('dinner', {
            url: '/dinner',
            templateUrl: 'partials/dinner.html',
            controller: 'dinnerCtrl'    
        })
        
        .state('menu', {
            url: '/menu',
            templateUrl: 'partials/menu.html',
            controller: 'menuCtrl'    
        })
        
        .state('sushi', {
            url: '/sushi',
            templateUrl: 'partials/sushi.html',
            controller: 'sushiCtrl'    
        })

        .state('drikkekort', {
            url: '/drink',
            templateUrl: 'partials/drink.html',
            controller: 'drinkCtrl'
        }) 

        .state('take-away', {
            url: '/take-away',
            templateUrl: 'partials/takeaway.html',
            controller: 'takeawayCtrl'    
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',  
        });
        
}).controller('dinnerCtrl',function($scope,$http,$q) {
    
    getDinners().then(function(response){
        $scope.dinners = response.data;
    });

    function getDinners(){
        var deferred = $q.defer();
        $http.get('json/dinner.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
}).controller('alacarteCtrl',function($scope,$http,$q) {
    
    getDinners().then(function(response){
        $scope.dinners = response.data;
    });

    getMenus().then(function(response){
        $scope.menus = response.data;
    });

    function getDinners(){
        var deferred = $q.defer();
        $http.get('json/priser.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }

    function getMenus(){
        var deferred = $q.defer();
        $http.get('json/menus.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
  }).controller('takeawayCtrl',function($scope,$http,$q) {
    
    getDinners().then(function(response){
        $scope.dinners = response.data;
    });

    getMenus().then(function(response){
        $scope.menus = response.data;
    });

    function getDinners(){
        var deferred = $q.defer();
        $http.get('json/priser.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }

    function getMenus(){
        var deferred = $q.defer();
        $http.get('json/menus.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
}).controller('sushiCtrl',function($anchorScroll,$location,$scope,$http,$q) {
    
    getDinners().then(function(response){
        $scope.sushi = response.data;
    });

    function getDinners(){
        var deferred = $q.defer();
        $http.get('json/sushi.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
    $scope.gotoAnchor = function(x) {
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
        } else {
            $anchorScroll();
        }
    };

}).controller('menuCtrl',function($scope,$http,$q) {
    
    getDinners().then(function(response){
        $scope.menus = response.data;
    });

    function getDinners(){
        var deferred = $q.defer();
        $http.get('json/menus.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
}).controller('drinkCtrl',function($scope,$http,$q) {
    
    getVine().then(function(response){
        $scope.wines = response.data;
    });
    getSpiritus().then(function(response){
        $scope.spirits = response.data;
    });
    getDiverse().then(function(response){
        $scope.diverse = response.data;
    });

    function getVine(){
        var deferred = $q.defer();
        $http.get('json/vin.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }

    function getSpiritus(){
        var deferred2 = $q.defer();
        $http.get('json/spiritus.json').then(function(response){       
           deferred2.resolve(response);
        });
        return deferred2.promise;
    }

    function getDiverse(){
        var deferred = $q.defer();
        $http.get('json/diverse.json').then(function(response){       
           deferred.resolve(response);
        });
        return deferred.promise;
    }
    
});

client.run(function($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            if (window.RestaurantVindeMap && typeof window.RestaurantVindeMap.init === 'function') {
                window.RestaurantVindeMap.init();
            }
        }, 0);
    });
});
