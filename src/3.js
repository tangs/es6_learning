{
    const [a, b, c] = [1, 2, 3];
    console.log(`a:${a}, b:${b}, c:${c}`);
}

{
    const set = new Set();
    set.add('1');
    set.add(2);
    set.add('t');
    const [a, b, c] = set;
    console.log(`a:${a}, b:${b}, c:${c}`);    
}

{
    const fibs = function* () {
        let a = 1;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    const [f, s, t] = fibs();
    console.log(`f:${f}, s:${s}, t:${t}`);    
}

{
    const [x = 1, y = 2] = [undefined, null];
    console.log(`x:${x}, y:${y}`);
}