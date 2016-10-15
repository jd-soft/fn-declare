fn-declare
========

fn-declare lets you dynamically define a function with the amount of parameters you want. 

You might need this behaviour if external library is forcing you to declare some amount of parameters inside a function but you prefer some generic approach using `arguments`


Usage
-------------
To get a function definition with 2 parameters:

    var fnDeclare = require('fn-declare');
    var fnWithDefinedParameters = fnDeclare(2, function(){
      console.log(arguments);
    });
    
    fnWithDefinedParameters('a', 'b') => prints ['a', 'b']
    
    

Eventually `fnDeclare(2, function someCallback(){})` returns a function which is the same as if a callback was defined with explicit parameters 
    
    function someCallback(p1, p2, p3){
      //some code using arguments. 
    }
    
    
    