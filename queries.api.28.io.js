angular.module('queries.api.28.io', [])
.factory('Queries', function($q, $http){  

    return function(domain, cache) {
        if(typeof(domain) !== 'string') {
            throw new Error('Domain parameter must be specified as a string.'); 
        }
        
        this.listQueries = function(visibility, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + visibility + '';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            var cached = cache.get(url);
            if(cached && 'GET' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'GET',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.put(url, data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.executeSimpleQuery = function(queryPath, format, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '' + format + '';
            var params = {};
                params['token'] = token;
            var cached = cache.get(url);
            if(cached && 'GET' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'GET',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.put(url, data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.executeQuery = function(accept, queryPath, format, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '' + format + '';
            var params = {};
                params['token'] = token;
            var cached = cache.get(url);
            if(cached && 'POST' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'POST',
                url: url,
                params: params, headers: {'Accept': accept}
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.remove(url);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.getQuery = function(queryPath, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '/metadata/source';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            var cached = cache.get(url);
            if(cached && 'GET' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'GET',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.put(url, data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.createQuery = function(queryPath, token, compile, queryBody){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '/metadata/source';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            params['compile'] = compile;
            var body = queryBody;
            var cached = cache.get(url);
            if(cached && 'POST' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'POST',
                url: url,
                params: params, data: body
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.remove(url);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.saveQuery = function(queryPath, token, compile, queryBody){
            var deferred = $q.defer();
            var contentType = 'text/plain; charset=utf-8';
            var url = domain + '/_queries/' + queryPath + '/metadata/source';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            params['compile'] = compile;
            var body = queryBody;
            var cached = cache.get(url);
            if(cached && 'PUT' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'PUT',
                url: url,
                params: params, data: body, headers: {'Content-Type': contentType}
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.remove(url);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.removeQuery = function(queryPath, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '/metadata/source';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            var cached = cache.get(url);
            if(cached && 'DELETE' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'DELETE',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.remove(url);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.getQueryPlan = function(queryPath, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '/metadata/plan';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            var cached = cache.get(url);
            if(cached && 'GET' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'GET',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.put(url, data);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };

        this.compileQuery = function(queryPath, token){
            var deferred = $q.defer();
            var url = domain + '/_queries/' + queryPath + '/metadata/plan';
            var params = {};
            if(token  === undefined) { 
                deferred.reject(new Error('The token parameter is required'));
                return deferred.promise;
            } else { 
                params['token'] = token; 
            }
            var cached = cache.get(url);
            if(cached && 'PUT' === 'GET') {
                deferred.resolve(cached);
            } else {
            $http({
                method: 'PUT',
                url: url,
                params: params
            })
            .success(function(data, status, headers, config){
                deferred.resolve(data);
                cache.remove(url);
            })
            .error(function(data, status, headers, config){
                deferred.reject(data);cache.remove(url);
            })
            ;
            }
            return deferred.promise;    
        };
    };
});