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
    // const func1 = () => {
    //     return new Promise((resolved, reject) => {
    //         setTimeout(() => {
    //             console.log('timeout.');
    //             resolved();
    //         }, 1000);
    //     });
    // };
    // func1().then(() => {
    //     console.log('1.');
    //     return func1();
    // }).then(() => {
    //     console.log('2.');
    //     return func1();
    // }).then(() => {
    //     console.log('3.');
    // });
}

// {
//     new Promise((resolved, reject) => reject()
//     ).then(undefined, () => console.log('call then.')
//     ).catch(() => console.log('call catch.'));
// }

// {
//     new Promise((resolved, reject) => reject()
//     ).then(() => console.log('call then1.')
//     ).catch(() => console.log('call reject1.'));
// }

// {
//     new Promise((resolved, reject) => {
//         resolved();
//         // reject();
//         // resolved();
//     }).then(() => {
//         console.log('resolved.');
//         throw new Error('err');
//     }).catch(() => {
//         console.log('reject.')
//     }).finally(() => {
//         console.log('finally.');
//     });
// }

// {
//     const promises = [1, 2, 3, 4, 5].map((number) => new Promise((resolved, reject) => {
//         if (number === 5) {
//             reject();
//         } else {
//             resolved();
//         }
//     }));
//     promises[4] = promises[4].catch(() => console.log('reject1.'));
//     Promise.all(promises).then(() => console.log('resovled.')
//     ).catch(() => console.log('reject.'));
// }

// {
//     const p1 = new Promise((resovled, reject) => {
//         setTimeout(() => {
//             console.log('p1 timeout.');
//             reject();
//         }, 1000);
//     });
//     const p2 = new Promise((resovled, reject) => {
//         setTimeout(() => {
//             console.log('p2 timeout.');
//             resovled();
//         }, 2000);
//     });
//     Promise.race([p1, p2]).then(() => console.log('then')
//     ).catch(() => console.log('reject.'));
// }

{
    setTimeout(() => console.log(1));
    Promise.resolve().then(() => console.log(2));
    console.log(3);
}