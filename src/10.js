{
    const obj = new Object(1);
    console.log(obj);
    console.log(obj.toString());
    console.log(obj + 3);
    console.log(Object.keys(obj));
    console.log(Object.getOwnPropertyNames(obj));
    console.log(Reflect.ownKeys(obj));
    for (const k in obj) {
        console.log(`${k}, ${obj[k]}`);
    }
}

{
    let size = Symbol('size');
    class Collection {
        constructor() {
            this[size] = 0;
        }

        add(item) {
            this[this[size]++] = item;
        }

        sizeof() {
            return this[size];
        }
    }

    const c1 = new Collection();
    const c2 = new Collection();
    c1.add(1);
    c1.add('33');
    c2.add(336);
    console.log(c1);
    console.log(c2);
    console.log(Object.getOwnPropertyNames(c1));
    console.log(Object.entries(c1));
    console.log(Object.getOwnPropertySymbols(c1));
}

{
    console.log(Symbol('1') === Symbol.for('1'));
    console.log(Symbol.for('1') === Symbol.for('1'));
}

{
    const symbol = Symbol.for('111');
    console.log(Symbol.keyFor(Symbol('1')));
    console.log(Symbol.keyFor(Symbol.for('1')));
    console.log(Symbol.keyFor(symbol));
}

{
    class MySplitter {
        constructor(value) {
            this.value = value;
        }
        [Symbol.split](string) {
            let index = string.indexOf(this.value);
            if (index === -1) {
                return string;
            } else {
                return [
                    string.substr(0, index),
                    ...string.substr(index + this.value.length, string.length).split(this.value)
                ];
            }
            
        }
    }
    console.log('a,bdd,ch3,d,egd'.split(new MySplitter(',')));
}

{
    class MyIterator {
        constructor(...paras) {
            this.value = paras;
        }
        *[Symbol.iterator]() {
            const value = this.value;
            if (value instanceof Array) {
                for (let i = value.length - 1; i >= 0; --i) {
                    yield value[i];
                }
            } else {
                yield value;
            }
        }
    }
    const iter = new MyIterator(1, 2, 3, 4, 5);
    console.log(...iter);
}

{
    class MyClass {
        constructor(value) {
            this.value = value;
        }
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case 'number':
                    return 100 + this.value;
                case 'string':
                    return `str:${this.value}`;
                case 'default':
                    return `def:${this.value}`;
                default:
                    throw new Error(`error hint type:${hint}`);
            }
        }
    }

    const my = new MyClass(111);
    console.log(2 * my);
    console.log(2 + my);
    console.log('def:111' == my);
    console.log('111' == my);
    console.log('' + my);
    console.log('aaa' + my);
}
