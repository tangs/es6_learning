{
    const num = 0x1FFFFFFFF;
    const num1 = num | 0;
    console.log(num);
    console.log(num1);
    console.log(num1 >>> 1);
}

{
    const a = 3 ^ 2 ^ 3;
    const b = 3 ** 2 ** 3;
    console.log(a, b);
}
