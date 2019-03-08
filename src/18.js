const fs = require('fs');
const thunkify = require('thunkify');
// const co = require('co');
// const readFile = require('fs-readfile-promise');

{
    fs.readFile('src/16.js', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
        }
    });
}

{
    const readFile = (path) => {
        // console.log('readFile:' + path);
        return new Promise((resovled, reject) => {
            setTimeout(() => {
                fs.readFile(path, 'utf-8', (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resovled(data);
                    }
                });
            }, 1000);
        });
    };

    // readFile('src/16.js'
    // ).then((data) => {
    //     console.log('read 16.js end');
    // }).then(() => {
    //     return readFile('src/15.js');
    // }).then((data) => {
    //     console.log('read 15.js end');
    // }).catch((err) => {
    //     console.log('err:' + err);
    // });

    const asyncReadFile = function* (path) {
        while (path) {
            path = yield readFile(path);
        }
    };

    const readFiles = (paths) => {
        if (paths.length <= 0) {
            return;
        }
        const it = asyncReadFile(paths[0]);
        const ret = it.next();
        // ret.value.then((data) => {
        //     console.log('1');
        // }).then(() => {
        //     return it.next(paths[1]).value;
        // }).then((data) => {
        //     console.log('2');
        // }).catch((err) => {
        //     console.log('err' + err);
        // });
        // for (let path of paths) {
        //     try {
        //         console.log('read1:' + path);
        //         const ret = it.next(path);
        //         console.log('read:' + path);
        //     } catch(err) {
        //         console.log('err' + err);
        //     }
        // }
    };
    // readFiles(['src/2.js', 'src/3.js']);
}

{
    const func = (...paras) => {
        const dt = paras[0];
        const callback = paras[paras.length - 1];
        setTimeout(() => {
            // console.log(paras[0]);
            if (dt === 3000) {
                callback(dt);
            } else {
                callback(null, dt);
            }
        }, dt);
    };

    // const read = thunkify(fs.readFile);
    const read = thunkify(func);
    const gen = function* (paths) {
        for (let path of paths) {
            try {
                yield read(path);
            } catch (err) {
                console.log('catch1:' + err);
            }
        }
        return true;
    };
    // const run = function(paths) {
    //     const fun = gen(paths);
    //     function next(err, data) {
    //         const result = fun.next();
    //         if (result.done) return;
    //         result.value(next);
    //     }
    //     next();
    // };
    const run = (fn, paras) => {
        const get = fn(paras);
        function next() {
            const ret = get.next();
            if (ret.done) {
                return;
            }
            ret.value(callback);
        }
        function callback(err, data) {
            next();
            if (err) {
                console.log('err:' + err);
            } else {
                console.log('data:' + data);
            }
        }
        next();
    };
    // run(gen, [2000, 1000]);
    // console.log(1);
    // // for (let data of gen(['src/2.js', 'src/3.js'])) {
    // for (let data of gen([2000, 1000])) {
    //     console.log(1);
    //     data((err, data) => {
    //         if (err) {
    //             console.log('err:' + err);
    //         } else {
    //             console.log('data:' + data);
    //         }
    //     });
    //     console.log(2);
    // }

    //     co(gen, [100, 200, 300, 400]).then((data) => {
    //         console.log('data:' + data);
    //     }).catch((err) => {
    //         console.log('err:' + err);
    //     });
    function run1(gen, ...paras) {
        const g = gen(...paras);
        function callback(err, data) {
            if (err) {
                console.log('err:' + err);
            } else {
                console.log('data:' + data);
                next();
            }
        }
        function next() {
            const ret = g.next();
            if (ret.done) {
                return ret.value;
            }
            ret.value(callback);
            // ret.value.then(callback);
        }
        next();
    }
    try {
        run1(gen, [1000, 2000, 3000, 4000]);
    } catch (err) {
        console.log('catch:' + err);
    }
}
