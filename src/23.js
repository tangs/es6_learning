{
    const A = function(x, y) {
        this.x = x;
        this.y = y;
    };
    A.prototype = {
        constructor: A,
        funcA: function() {
            console.log(`x:${this.x}, y:${this.y}`);
        }
    };
    A.funcC = function() {
        console.log('call A.funcC().');
    };

    const B = function(...paras) {
        const [, , z] = paras;
        A.apply(this, paras);
        this.z = z;
    };
    B.prototype = Object.create(A.prototype);
    B.prototype.funcB = function() {
        console.log(`x:${this.x}, y:${this.y}, z:${this.z}`);
    }
    B.prototype.constructor = B;

    const b = new B(1, 2, 3);
    b.funcA();
    b.funcB();

    const c = new b.constructor(3, 4, 5);
    console.log(c instanceof B);
}

{
    class A {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        funcA() {
            // console.log('call A.funcA().');
            console.log(`x:${this.x}, y:${this.y}`);
        }
    }

    class B extends A {
        constructor(x, y, z) {
            super(x, y);
            this.z = z;
        }

        funcB() {
            console.log(`x:${this.x}, y:${this.y}, z:${this.z}`);
        }
    }

    const b = new B(1, 2, 3);
    b.funcA();
    b.funcB();
}
