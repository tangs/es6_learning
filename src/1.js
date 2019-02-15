{
    const func = () => console.log("Hello world.");
    func();
    for (let i = 0; i < 3; ++i) {
        const i = 'string';
        console.log(i);
    }
    var a = 123;
    if (true) {
        // a = 'abc';
        console.log(typeof ddd)
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

    const func2 = () => {
        console.log("func2:1");
    }
    {
        if (false) {
            const func2 = () => {
                console.log("func2:2");
            }
        }
        func2();
    }
    // func2();
}
