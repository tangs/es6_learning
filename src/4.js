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
        console.log(ch, ch.codePointAt());
    }
    // console.log(len);
    // for (let i = 0; i < len; ++i) {
    //     console.log(a.codePointAt(i).toString(16).toUpperCase());
    // }
    // console.log(a.length);
}
