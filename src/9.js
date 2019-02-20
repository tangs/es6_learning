{
    const x = 3;
    const y = 5;
    const obj = {x, y};
    console.log(obj);
}

{
    const a = 'c';
    const obj = {
        'b': 'b',
        [a]: 'a'
    };
    console.log(obj[a]);
    console.log(obj['b']);
    console.log(obj['c']);
}

{
    // const obj = {foo: 123};
    const obj = new Object();
    obj['k'] = 'v';
    console.log('for...in');
    for (let k in obj) {
        console.log(k, obj[k]);
    }
    console.log('Object.keys()');
    const keys = Object.keys(obj);
    for (let i in keys) {
        const k = keys[i];
        console.log(k, obj[k]);
    }
}

{
    const obj = new Object(1);
    console.log({...obj});
    console.log(obj);
}
