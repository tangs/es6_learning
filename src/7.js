{
    const func = (a) => {
        if (true) {
            var a = 333;
        }
        console.log(a);
    };
    func(22);
}

{
    function func(a, a) {
        console.log(a, a);
    }
    // const func1 = (a, a) => {
    // };
    func(1, 2);
}

{
    const func1 = a => {
        console.log('call func1.');
        return a*a;
    };
    const func2 = (a = func1(2)) => {
        console.log(a);
    }
    func2();
    func2(1);
}

{
    const m1 = ({x = 0, y = 0} = {}) => {
        return [x, y];
    }
    const m2 = ({x, y} = {x: 0, y: 0}) => {
        return [x, y];
    }
    // 1, 0
    console.log(m1({x: 1}));
    // 1, undefined
    console.log(m2({x: 1}));
}

{
    const fun1 = (a, b, c = 3) => a + b + c;
    console.log(fun1.length);
}

{
    const fun = a => a*a;
    console.log(fun.name);
    console.log(eval(`${fun.name}(4)`));
}
