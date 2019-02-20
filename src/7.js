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
    console.log(new Function());
    console.log(fun.bind(this).name);
    console.log(eval(`${fun.name}(4)`));
}

{
    const fun = (x) => void x++;
    console.log(fun(3));
}

// {
//     const a = 3;
//     function func() {
//         return this.a;
//     }
//     const b = {a: 5};
//     b::func();
// }

{
    const fib = (n, num1 = 1, num2 = 1) => {
        if (n <= 1) return num2;
        return fib(n - 1, num2, num1 + num2);
    }
    console.log(fib(1));
    console.log(fib(100));
    console.log(fib(1000));
}
