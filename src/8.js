{
    const func = (a, b, c) => {
        console.log(a, b, c);
    }
    const arr = [1, 2, 3];
    func(...arr);
}
{
    const old = Number.prototype[Symbol.iterator];
    Number.prototype[Symbol.iterator] = function*() {
        let num = this.valueOf();
        do {
            yield num % 10;
            num = Math.trunc(num / 10);
        } while(num > 0);
    }
    console.log([...1234560]);
    for (let n of [...9876543210]) {
        console.log(n);
    }
    for (let ch of 'abcdefg') {
        console.log(ch);
    }
    console.log(typeof [...234]);
    Number.prototype[Symbol.iterator] = old;
}

{
    console.log([1, 2, 3, 4].find(n => n < 3));
    console.log([1, 2, 3, 4].findIndex(n => n < 3 && n > 1));
}

{
    console.log([1, [2, [3, 4]]]);
    const arr = [1, [2, 3, 4, [5, 6]]];
}