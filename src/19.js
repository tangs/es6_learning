const fs = require('fs');
const fetch = require('node-fetch');
{
    const readFile = (path) => {
        return new Promise((resovled, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resovled(data);
                }
            });
        });
    }
    const asyncFunc = async function() {
        const f1 = await readFile('src/2.js');
        console.log(f1.length);
        const f2 = await readFile('src/3.js');
        console.log(f2.length);
    };
    // asyncFunc().then(() => {
    //     console.log(2);
    // }).catch(() => {
    //     console.log(3);
    // });
    // console.log(1);
}

{
    const func = (dt) => {
        return new Promise((resovled) => {
            setTimeout(resovled, dt);
        })
    };
    const gen = async function(nums) {
        for (let num of nums) {
            await func(num);
            console.log(num);
        }
    };
    // gen([500, 1000, 2000, 4000]).then(() => {
    //     console.log('end.');
    // }).catch(() => {
    //     console.log('err.');
    // });
}

{
    function logInOrder(urls) {
        const textPromises = urls.map(url => {
            return fetch(url).then(res => {
                res.text();
            });
        });

        textPromises.reduce((chain, textPromise) => {
            return chain.then(() => textPromise)
                .then((text) => {
                    console.log(text)
                });
        }, Promise.resolve());
    }
    // logInOrder(['https://github.githubassets.com/assets/frameworks-b102e868.js']);
}

{
    async function logInOrder(urls) {
        for (const url of urls) {
            const res = await fetch(url);
            console.log((await res.text()).length);
        }
    }
    // logInOrder(['https://github.githubassets.com/assets/frameworks-b102e868.js', 'http://www.baidu.com']);
}

{
    async function logInOrder(urls) {
        const promises = urls.map(async (url) => {
            const res = await fetch(url);
            return res.text();
        });
        for (const promise of promises) {
            console.log((await promise).length);
        }
    }
    // logInOrder(['http://hao123.com', 'http://www.baidu.com']);
}

{
    function func(b, time = 1000) {
        return new Promise((resolved, reject) => {
            setTimeout(() => {
                if (b) {
                    resolved('YES:' + time);
                } else {
                    reject('NO.');
                }
            }, time);
        });
    }
    async function func1(paras) {
        console.log(await func(paras));
        try {
            console.log(await func(false));
        } catch (err) {
            console.log('err:' + err);
        }
    }

    async function func2(arr) {
        const promises = arr.map(async (paras) => {
            return await func(...paras);
        });
        for (const promise of promises) {
            console.log(await promise);
        }
    }

    // func1();
    func2([[true, 3000], [true, 2000], [true, 500]]);
}
