{
    const s = new Set([3, 1, 5, 2, 6, 2]);
    for (let v of s) {
        console.log(v);
    }
}

{
    console.log([...new Set('abcddddbc')].join(''));
}
