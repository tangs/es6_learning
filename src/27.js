{
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(() => {
            console.log(3);
            resolve();
        }, 1000);
    });
    console.log(2);
    promise.then(() => {
        console.log(4);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(5);
                resolve();
            }, 1000);
        }).then(() => {
            console.log(6);
            throw new Error('err');
            setTimeout(() => console.log(7), 1000);
        });
    }).then(() => {
        console.log(8);
    }).then(() => {
        console.log(9);
    }).catch(() => {
        console.log('err');
    })
}
