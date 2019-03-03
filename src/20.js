{
    class Point {
        // b = 33;
        constructor(x, y) {
            [this.x, this.y] = [x, y];
        }
        func() {

        }
    }

    console.log(typeof Point);
    console.log(Point === Point.prototype.constructor);

    const p = new Point(1, 2);
    const p1 = new p.constructor(3, 4);
    console.log(p1);
    console.log(Point === p.constructor);
    console.log(Point === Point.prototype.constructor);
}
 
{
    let index = 0;
    function Point(...paras) {
        const priValue = index++;
        const self = this;
        constructor = function(x, y) {
            [self.x, self.y] = [x, y];
        }

        toString = function() {
            return `(${self.x}, ${self.y})[${priValue}]`;
        }

        constructor(...paras);
        const ret = {
            toString: toString
        };
        // ret.__proto__.toString = toString;
        return ret;
    }

    const p = new Point(100, 300);
    const p1 = new Point(1000, 300);
    console.log(p.toString());
    console.log('' + p1);
    console.log(p === Point.prototype.constructor)
}

{
    class A {
        constructor() {
            console.log('A');
            console.log('t:' + new.target.name);
        }
    }
    class B extends A {
        constructor() {
            console.log('B');
            super();
        }
    }

    const a = new B();
    console.log(A.name);
    // console.log(a.name);
    console.log(Object.getPrototypeOf(B) === A);
}

{
    class A {
        constructor() {
            this.a = 30;
            this.b = 1;
        }
        func() {
            console.log('call A.func().');
        }
        func1() {
            console.log('call A.func1().');
        }
    };

    class B extends A {
        constructor() {
            super();
            this.b = 2;
        }
        func() {
            console.log(this.a);
            console.log(super.a);
            this.func1();
            super.func();
        }
        func2() {
            console.log(this.b);
            // console.log(super.b);
        }
    }

    const b = new B();
    b.func();
    b.func2();
    b.__proto__.__proto__.func10 = () => {
        console.log('call func10().');
    };
    new A().func10();
}
