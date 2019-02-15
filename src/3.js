{
    const [a, b, c] = [1, 2, 3];
    console.log(`a:${a}, b:${b}, c:${c}`);
}

{
    const set = new Set();
    set.add('1');
    set.add(2);
    set.add('t');
    const [a, b, c] = set;
    console.log(`a:${a}, b:${b}, c:${c}`);    
}
