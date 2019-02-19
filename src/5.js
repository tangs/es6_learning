{
    const regex = new RegExp(/abc/g, 'ig');
    const txt = 'aBcgAbcabc';
    console.log(txt.match(regex));
    console.log(regex.test(txt));
    console.log(regex.flags);
    console.log(regex.unicode);
}

{
    const s = '𠮷';
    console.log(/^.$/.test(s));
    console.log(/^.$/u.test(s));
}

{
    function getLength(txt) {
        const result = txt.match(/./gu);
        return result ? result.length: 0;
    }

    const s = '𠮷𠮷';
    console.log(s.length);
    console.log(getLength(s));
}
