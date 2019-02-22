{
    const obj = new Proxy({}, {
        get: function(target, key, receiver) {
            const v = target[key];
            console.log(`get:${key} = ${v}`);
            return Reflect.get(target, key, receiver);
        },
        set: function(target, key, value, receiver) {
            console.log(`set:${key} = ${value}`);
            return Reflect.set(target, key, value, receiver);
        }
    });
    obj.a = 100;
    console.log(++obj.a + obj.a++);
}

{
    const target = function() { return 'I\'m target.'};
    const p = new Proxy(target, {
        apply: function(target, ctx, args) {
            console.log('apply.');
            console.log(target);
            console.log(ctx);
            console.log(args);
            return Reflect.apply(target, ctx, args);
        }
    });
    // this = target;
    p(1, 2, 3);
    p.bind(p)(1, 3);
    p.call(p, 1, 2, 3);
    p.apply(p, [1, 2, 3]);
}

{
    const target = {
        a: 333
    };
    const obj = new Proxy(target, {
        has: function(target, prop) {
            return true;
        }
    });
    console.log('a' in obj);
    console.log(1 in obj);
}

{
    const obj = {
        a: 1,
        b: 2
    };
    delete obj.a;
    for (let k in obj) {
        console.log(k, obj[k]);
    }
}
