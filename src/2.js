{
    const func = () => console.log('Hello world.');
    func();
    for (let i = 0; i < 3; ++i) {
        const i = 'string';
        console.log(i);
    }
    var a = 123;
    if (true) {
        // a = 'abc';
        console.log(typeof ddd);
        let a;
        console.log(a);
    }
    // var b = '1';
    const b = 333;
    console.log(`b:${b}`);

    var c = 3;
    const func1 = function() {
        console.log(`func.c:${c}`);
    };
    var c = '111';
    func1();
    console.log(`c:${c}`);
}

{
    const func2 = () => {
        console.log('func2:1');
    };
    const a = 1;
    if (a === 2) {
        const func2 = () => {
            console.log('func2:2');
        };
    }
    func2();
    // if (true)
    //     const func3 = () => {
    //         console.log("func2:1");
    //     }
    const foo = Object.freeze({ a: 1, b: 2 });
    foo.a = 3;
    console.log(`a:${foo.a}`);
}
// var a = 33;
// console.log(`a:${this.a}`);

// {
//     let i = 0;
//     for (i = 0; i < 10; ++i) {
//         setTimeout(() => {
//             console.log(`a:${i}`);
//         }, i + 500);
//     }
// }

// {
//     for (let i = 0; i < 10; ++i) {
//         setTimeout(() => {
//             console.log(`a:${i}`);
//         }, i + 500);
//     }
// }

{
    const func = (...pars) => {
        console.log(pars);
    };
    func.apply(this, [1, 2, 3]);
    func.call(this, [1, 2, 3]);
}

{
    let i = 0;
    for (; i < 5; ++i) {
        // setTimeout(() => console.log(i), 0);
    }
}

{
    for (let i = 0; i < 5; ++i) {
        // setTimeout(() => console.log(i), 0);
    }
}

{
    const arr = [0, 1, 2, 3, 4];
    for (const i of arr) {
        // setTimeout(() => console.log(i), 0);
    }
}

{
    for (let i = 0; i < 5; ++i) {
        setTimeout(() => {
            // console.log(i);
        }, 0);
    }
}

{
    let i = 0;
    setTimeout(function() {
        console.log(i);
        // {
        //     var i = 30;
        // }
    }, 100);
    setTimeout(() => {
        console.log(i);
    }, 200);
    {
        let i = 453;
    }
}

{
    let i = 0;
    {
        i += 3;
        // let i = 3;
    }
}
