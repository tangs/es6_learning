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

{
    const [x, ...y] = [1, 2, 3, 4];
    console.log(`y:${y}, typeof:${typeof y}`);
}

{
    const f = function() {
        console.log("1");
    };
    console.log("2");
    let [x = f()] = [1];
    console.log("3");
}

{
    const p = {
        a: 1,
        b: 2,
        c: 3
    };
    const {a, b, c: e, d} = p;
    console.log(`a:${a}, b:${b}, e:${e}, d:${d}`);
}

{
    const obj = {
        p: [
            'Hello',
            {y: 'World'}
        ]
    };
    const {p, p: [x, {y}]} = obj;
    console.log(p);
    console.log(x);
    console.log(y);
}

{
    const obj = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };
    const {loc, loc: {start}, loc: {start: {line}}} = obj;
    console.log(loc);
    console.log(start);
    console.log(line);
}

{
    const obj = {};
    const arr = [];
    ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});
    // {prop: 123}
    console.log(obj);
    // [true]
    console.log(arr);
}

{
    const func = () => {
        console.log('call func.');
        return 111;
    }
    const obj = {
        a: 1,
        b: '2'
    };
    const {a = 100, b = func(), c = 300, d = func()} = obj;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

{
    const arr = [
        1,
        2
    ];
    const {0: a, 1: b, 2: c} = arr;
    console.log(a);
    console.log(b);
    console.log(c);
}

{
    const {0: a, 1: b, 2: c, length: l} = 'adc';
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(l);
}

{
    const num = 123;
    const {toString: s} = num;
    console.log(s.call(num));
    console.log(s === Number.prototype.toString);
}

{
    const num = [[1, 2], [3, 4]].map(([a, b]) => a * b);
    console.log(num);
}

{
    [(b)] = [3];
    {
        const b = 33;
    }
    console.log(b);
}

{
    const obj = new Map();
    obj.set('a', 1);
    obj.set('b', '333');
    for (const [k, v] of obj) {
        console.log(k, v);
    }
}
