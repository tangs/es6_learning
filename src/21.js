{
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];
    console.log(c);

    const map = new Map();
    map.set('1', 1);
    map.set('2', 2);
    for (const [k, v] of map.entries()) {
        console.log(k, v);
    }
}
