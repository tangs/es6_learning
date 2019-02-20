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

{
    const s = 'aaa_aa_a_aaaa';
    const s1 = 'bb_a_b_aaaa';
    const r1 = /a+/g;
    const r2 = /a+_?/y;
    do {
        let ret = r1.exec(s);
        console.log(ret);
        if (!ret) {
            break;
        }
    } while(1);
    r1.lastIndex = 0;
    console.log(r1.exec(s));
    console.log(s);
    do {
        let ret = r2.exec(s);
        console.log(ret, r2.lastIndex);
        if (!ret) {
            break;
        }
    } while(1);
}

{
    const s = 'a:1 b:3 c:6 d:50';
    const exp = /(?<k>\w+):(?<v>\w+)/g;
    const obj = new Object();
    do {
        const ret = exp.exec(s);
        // console.log(ret, exp.lastIndex);
        if (!ret) {
            break;
        } else {
            // const g = ret.groups;
            const {groups: {k, v}} = ret;
            obj[k] = v;
            console.log(k, v);
        }
    } while(1);
    console.log(obj);
}

{
    const s = '2019/08/03';
    const exp = /(?<y>\d{4})\D*(?<m>\d{1,2})\D*(?<d>\d{1,2})/;
    const s1 = s.replace(exp, '$<y>-$<m>-$<d>');
    const s2 = s.replace(exp, (matched, c1, c2, c3, pos, src, groups) => {
        const {y, m , d} = groups;
        return `${y}\\${m}\\${d}`;
    });
    console.log(s1);
    console.log(s2);
}

{
    const rex = /a(b)(?<name>c)\1\k<name>/;
    console.log(rex.test('abc'));
    console.log(rex.test('abcbc'));
    console.log(rex.test('abcb'));
    console.log(rex.test('abcc'));
}

{
    const rex = /\w/;
    const s = 'abc def gg_d';
    // const matchs = s.matchAll(rex);
    // for (const match of matchs) {
    //     console.log(match);
    // }
}
