{
    const regex = new RegExp(/abc/g, 'ig');
    const txt = 'aBcgAbcabc';
    console.log(txt.match(regex));
    console.log(regex.test(txt));
}

{
    const s = '𠮷';
    console.log(/^.$/.test(s));
    console.log(/^.$/u.test(s));
}
