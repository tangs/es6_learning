{
    function* func() {
        yield 1;
        yield 2;
        return 3;
    }
    for (let v of func()) {
        console.log(v);
    }
    const a = func();
    while (true) {
        const ret = a.next();
        if (ret.done) {
            break;
        }
        console.log(ret.value);
    }
}

{
    let a = 10;
    function* func() {
        yield a;
        yield a;
    }
    for (let v of func()) {
        ++a;
        console.log(v);
    }
}

{
    function* fib() {
        let [prev, cur] = [0, 1];
        while (true) {
            yield cur;
            [prev, cur] = [cur, prev + cur];
        }
    }
    let i = 0;
    console.log('fib:');
    for (let n of fib()) {
        if (i >= 100) {
            break;
        }
        console.log(n);
        ++i;
    }
}
