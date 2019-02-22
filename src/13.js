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
