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

{
    const k = ['1'];
    const m = new Map();
    m.set('1', 3);
    m.set(['1'], 12);
    m.set(k, '2222');
    console.log(m.get('1'));
    console.log(m.get(['1']));
    console.log(m.get(k));
    console.log(m);
    for (let [k, v] of m) {
        console.log(k, v);
    }
    const arr = [...m];
    for (let [k, v] of arr) {
        console.log(k, v);
    }
}
