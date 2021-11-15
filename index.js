function receivesAFunction(fun) {
    fun();
}

function returnsANamedFunction() {
    function fun() {
        console.log("Hey!");
    }
    return fun;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("Hey!");
    }
}