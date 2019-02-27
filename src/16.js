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

{
    const func = function* () {
        console.log(1);
        try {
            console.log(2);
            yield 1;
            console.log(3);
        } catch (err) {
            console.log('err1' + err);
        }
        console.log(4);
        try {
            console.log(5);
            yield 2;
            console.log(6);
        } catch (err) {
            console.log('err2' + err);
        }
        console.log(7);
        try {
            console.log(8);
            yield 3;
            console.log(9);
        } catch (err) {
            console.log('err3' + err);
        }
        console.log(10);
    };
    const a = func();
    // a.throw(new Error('1'));
    let ret = a.next();
    console.log(ret);
    ret = a.throw(new Error('2'));
    console.log(ret);
    ret = a.next();
    // a.throw(new Error('3'));
    console.log(ret);
    ret = a.next();
    console.log(ret);
    // a.throw(new Error('4'));
}

{
    const func = function* (start, len) {
        for (let i = 0; i < len; ++i) {
            yield start + i;
        }
        if (len > 0) {
            yield* func(start, len - 1);
        }
    };
    console.log('yield*');
    for (let i of func(1, 5)) {
        console.log(i);
    }
}

{
    function Tree(left, node, right) {
        this.left = left;
        this.node = node;
        this.right = right;
        return;
    }

    function* inorder(t) {
        if (t) {
            yield* inorder(t.left);
            yield t.node;
            yield* inorder(t.right);
        }
    }

    function makeTree(array) {
        if (array.length == 1) {
            return new Tree(undefined, array[0], undefined);
        } else {
            return new Tree(makeTree(array[0]), array[1], makeTree(array[2]));
        }
    }

    const tree = makeTree([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
    const rets = [...inorder(tree)];
    console.log(rets);
}
