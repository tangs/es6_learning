{
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];
    console.log(c);

    const map = new Map();
    map.set('1', 1);
    map.set('2', 2);
    for (const [k, v] of map.entries()) {
        console.log(k, v);
    }
}

{
    function A(x, y) {
        this.x = x;
        this.y = y;
    }
    // A.prototype.a = function() {
    //     console.log('call A.a().');
    // };
    A.prototype = {
        constructor: A,
        a: function() {
            console.log('call A.prototype.a().');
        }
    };
    A.c = function() {
        console.log('call A.c().');
    };

    function B(...pars) {
        // super(x, y);
        const [, , z] = pars;
        A.apply(this, pars);
        this.z = z;
    }
    // B.prototype = new A();
    B.prototype = Object.create(A.prototype);
    B.prototype.constructor = A;

    B.prototype.b = function() {
        console.log(`x:${this.x}, y:${this.y}, z:${this.z}`);
    }

    const a = new B(1, 2, 3);
    a.b();
    a.a();
    // a.c();
}
