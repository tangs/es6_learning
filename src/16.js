{
    const obj = {
        [Symbol.iterator]: function() {
            let i = 0;
            return {
                next: () => {
                    return {
                        value: i++,
                        done: i > 10
                    };
                }
            }
        }
    };
    for (let v of obj) {
        // console.log(v);
    }
}

{
    class A {
        // [Symbol.iterator]() {
        //     let value = 0;
        //     return {
        //         next: () => {
        //             return {
        //                 value: value++,
        //                 done: value > 5
        //             };
        //         }
        //     }
        // }
    }

    class B extends A {

    }

    A.prototype[Symbol.iterator] = function() {
        // let i = 0;
        const keys = ['x', 'y', 'alpha'];
        let i = 0;
        return {
            next: () => {
                const ret = {
                    done: false
                }
                while (true) {
                    if (i >= keys.length) {
                        ret.done = true;
                        break;
                    }
                    const key = keys[i++];
                    if (this[key] !== undefined) {
                        ret.value = key;
                        break;
                    }
                }
                return ret;
            },
            return: () => {
                console.log('call return().')
                return {
                    done: true
                }
            }
        }
    };
    
    const a = new B();
    a.x = 10;
    a.y = 50;
    for (let v of a) {
        console.log(v, a[v]);
        // break;
    }
}

{
    class A {
        *[Symbol.iterator]() {
            for (let i = 0; i < 5; ++i)
                yield i;
        }
    }
    class B extends A {
        *[Symbol.iterator]() {
            for (let i = 0; i < 5; ++i)
                yield i + 10;
        }
    }

    const a = new B();
    for (let v of a) {
        console.log(v, typeof v);
    }
    for (let v in a) {
        console.log(v);
    }
    const b = new a.__proto__.constructor();
    console.log(b instanceof B);
    console.log(a.__proto__.constructor === B);
}
