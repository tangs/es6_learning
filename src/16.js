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
        let i = 0;
        return {
            next: () => {
                return {
                    value: i++,
                    done: i > 5
                };
            }
        }
    };
    
    const a = new B();
    for (let v of a) {
        console.log(v);
    }
}