{
    const s = new Set([3, 1, 5, 2, 6, 2]);
    for (let v of s) {
        console.log(v);
    }
}

{
    console.log([...new Set('abcddddbc')].join(''));
}

{
    const arr = [1, 2, 3, 4, 5, 6, 7].filter((v) => (v & 1) === 0);
    console.log(arr);
}

{
    const k = {k: 'v'};
    const k1 = {k: 'v1'};
    const m = new Map();
    m.set(k, 'v');
    m.set(k1, 'v1');
    const o = {
        [k]: 'vv',
        [k1]: 'vv1'
    };
    console.log(m);
    console.log(o);
}
