{
    // console.log("1");
    // const promise1 = new Promise((resolve, reject) => {
    //     console.log('promise1 call.')
    //     const time_s = new Date().getTime();
    //     setTimeout(() => {
    //         console.log('promise1 timeout.')
    //         const time_e = new Date().getTime();
    //         const diff_time = time_e - time_s;
    //         if (diff_time < 1000) {
    //             resolve(diff_time);
    //         } else {
    //             reject(diff_time);
    //         }
    //     }, 1500);
    // });
    // const promise2 = new Promise((resolve, reject) => {
    //     console.log('promise2 call.')
    //     setTimeout(() => resolve(promise1), 1000);
    // });
    // promise2.then((pars) => {
    //     console.log(`resolved:${pars}`);
    // }).catch((pars) => {
    //     console.log(`rejected:${pars}`);
    // });
    // console.log("2");
};

{
    // new Promise((resolve, reject) => {
    //     reject('333');
    // }).then((v) => console.log(`resolved:${v}`), (v) => console.log(`reject:${v}`));
}

{
    // new Promise((resolved, reject) => {
    //     setTimeout(() => {
    //         console.log('promise1 timeout.');
    //         resolved(new Promise((resolved, reject) => {
    //             setTimeout(() => {
    //                 console.log('promise2 timeout.');
    //                 resolved();
    //             }, 1000)
    //         }));
    //     }, 1000);
    // }).then(() => {
    //     console.log("then1.")
    // }).then(() => {
    //     console.log("then2.")
    // }).catch(() => {
    //     console.log('catch.')
    // });
}

{
    // new Promise((resolved, reject) => {
    //     console.log('0');
    //     resolved();
    //     console.log('1');
    //     setTimeout(() => {
    //         console.log('2');
    //     }, 0);
    // }).then((...pars) => console.log('call then.'));
    // console.log('3');
}

{
    const func1 = () => {
        return new Promise((resolved, reject) => {
            setTimeout(() => {
                console.log('timeout.');
                resolved();
            }, 1000);
        });
    };
    func1().then(() => {
        console.log('1.');
        return func1();
    }).then(() => {
        console.log('2.');
        return func1();
    }).then(() => {
        console.log('3.');
    });
}
