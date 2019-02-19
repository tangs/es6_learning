{
    const str = '\u{20BB7}';
    console.log(str);
}
{
    let hello = 123;
    // hell\u{6F} = 33;
    // console.log(hello);
    // hello = 125;
    // console.log(hell\u{6F});
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

    function compile(template) {
        const evalExpr = /<%=(.+?)%>/g;
        const expr = /<%([\s\S]+?)%>/g;
        template = template
        .replace(evalExpr, '`); \n echo($1); \n echo(`')
        .replace(expr, '`); \n $1 \n echo(`');
        template = `echo(\`${template}\`)`;
        const script = 
        `(function parse(data) {
            let output = '';

            function echo(html) {
                output += html;
            }

            ${template}

            return output;
        })`;
        return script;
    }
    let template = `
    <ul>
        <% for(let i = 0; i < data.supplies.length; ++i) { %>
            <li><%= data.supplies[i] %></li>
        <% } %>
    </ul>
    `;
    const script = compile(template);
    const parse = eval(script);
    const txt = parse({supplies: ['tangs', 'kaka', 'Rivaldo', 'Ronaldo']});
    console.log(txt);
}

{
    const func = (...pars) => {
        // for (let par of pars) {
        //     console.log(par, typeof `par`);
        // }
        // console.log('\n');
        console.log(pars);
    };
    func`Hello world`;
    func`123`;
    const num = 100;
    func`${num}`;
    func`Hello ${num} World ${num*num}`;

    function passthru(literals) {
        let result = '';
        let i = 0;
        while (i < literals.length) {
            result += literals[i++];
            if (i < arguments.length) {
                result += arguments[i];
            }
        }
        return result;
    }

    function passthru1(literals, ...values) {
        let result = '';
        for (let i = 0; i < values.length; ++i) {
            result += literals[i] + values[i];
        }
        if (literals.length > 0) {
            result += literals[literals.length - 1];
        }
        return result;
    }
    // [['The total is ', ' (', ' with tax)'], 100, 105]
    func`The total is ${num} (${num*1.05} with tax)`;
    // literals: ['The total is ', ' (', ' with tax)']
    // arguments: [['The total is ', ' (', ' with tax)'], 100, 105]
    // msg: The total is 100 (105 with tax)
    const msg = passthru`The total is ${num} (${num*1.05} with tax)`;
    const msg1 = passthru1`The total is ${num} (${num*1.05} with tax)`;
    console.log(msg);
    console.log(msg1);
    console.log`123\n`
}

{
    func1();
    console.log(typeof func1);
    console.log(typeof func2);
    // console.log(typeof func3);
    console.log(typeof func4);
    // console.log(typeof func5);


    function func1() {
        console.log('call func1.')
    }
    var func2 = function () {
        console.log('call func2.')
    }
    let func3 = function () {
        console.log('call func3.')
    }
    var func4 = () => {
        console.log('call func4.')
    }
    let func5 = () => {
        console.log('call func5.')
    }

    {
        func1();
        function func1() {
            console.log('call func1.1')
        }
        let func3 = function () {
            console.log('call func3.1')
        }
        func3();
    }
    func1();
    func3();
}

{
    function fun(...pars) {
        for (let par of pars) {
            console.log(par);
        }
    }
    fun([1, 2, 3]);
    fun.call(this, [1, 2, 3]);
    fun.apply(this, [1, 2, 3]);
    // console.log(typeof pars);
    const [...pars] = [1, 2, 3];
    fun(pars);
}

{
    const str = String.raw`Hi\n${3}\u000A`;
    console.log(str);
}
