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
    Number.prototype[Symbol.iterator] = old;
}
