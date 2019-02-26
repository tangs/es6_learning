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
            }
        }
    };
    
    const a = new B();
    a.x = 10;
    a.y = 50;
    for (let v of a) {
        console.log(v, a[v]);
    }
}