{
    const str = '\u{20BB7}';
    console.log(str);
}
{
    let hello = 123;
    hell\u{6F} = 33;
    console.log(hello);
    hello = 125;
    console.log(hell\u{6F});
}

{
    const a = '𠮷a';
    const len = a.length;
    for (const ch of a) {
        console.log(typeof ch);
        console.log(ch, ch.codePointAt(0).toString(16).toUpperCase());
    }
    // console.log(len);
    // for (let i = 0; i < len; ++i) {
    //     console.log(a.codePointAt(i).toString(16).toUpperCase());
    // }
    // console.log(a.length);
    const b = String.fromCodePoint(0x20BB7);
    console.log(b);
}

{
    const a = 'o\u030C';
    for (let ch of a) {
        console.log(`ch:${ch}`);
    }
    for (let ch of a.normalize('NFC')) {
        console.log(`ch1:${ch}`);
    }
    console.log(a);
    console.log(a.normalize('NFC'));
    console.log(a.length);
    console.log(a.normalize('NFC').length);
    console.log('\u01D1'.length);
    console.log('\u01D1'.normalize('NFC').length);
    console.log('\u01D1'.normalize('NFD').length);
}

{
    const a = '333'.padStart(10, '0');
    console.log(a);
}

{
    console.log(`line 1
line 2.`)
}

{
    const func = ({x, y = 33}) => {
        return x * y;
    };
    console.log(`ret:${func({x: 40})}.`);
}

{
    const tmp = addrs => `${addrs.map(addr => `${addr.x * addr.y}`)}`;
    console.log(tmp([{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]));
}

{
    let template = `
    <ul>
    
    </ul>
    `;
}
