const fs = require('fs')
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
    gen([500, 1000, 2000, 4000]).then(() => {
        console.log('end.');
    }).catch(() => {
        console.log('err.');
    });
}
