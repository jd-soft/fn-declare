function declare(amountOfParams, actualFn, scope) {
    if (amountOfParams < 0 && amountOfParams !== +amountOfParams) {
        throw new Error('First parameter must be a positive integer');
    }


    var functions = {
        f0: function () {
            actualFn.apply(scope, arguments)
        },
        f1: function (p1) {
            actualFn.apply(scope, arguments)
        },
        f2: function (p1, p2) {
            actualFn.apply(scope, arguments)
        },
        f3: function (p1, p2, p3) {
            actualFn.apply(scope, arguments)
        },
        f4: function (p1, p2, p3, p4) {
            actualFn.apply(scope, arguments)
        },
        f5: function (p1, p2, p3, p4, p5) {
            actualFn.apply(scope, arguments)
        }
    };

    if (amountOfParams <= 5) {
        return functions['f' + amountOfParams];
    }else{
        return dynamicDeclare(amountOfParams, actualFn, scope);
    }
}

function dynamicDeclare(amountOfParams, actualFn, scope) {
    var params = '';

    for (var i = 1; i <= amountOfParams; i++) {
        params += 'p' + i + (i < amountOfParams ? ',' : '');
    }

    var fn =  new Function(
        'return function (' + params + '){this.actualFn.apply(this.scope, arguments);}'
    )();

    var context = {
        'actualFn': actualFn,
        'scope': scope
    };

    return fn.bind(context);
}

module.exports = declare;


