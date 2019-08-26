{
    class A {
        constructor() {
            // super();
            this.a = 1;
            this.b = [2, 3, 4];
            this.c = {
                a: '2'
            };
            this.d = 'dd';
        }

        funcA() {

        }
    }

    class B extends A {
        constructor() {
            super();
            this.a = 0;
            // this.b = [1, 2, 3];
            this.b[0] = 3;
            this.c = {
                a: '1'
            };
            this.d = 'd';
        }

        funcB() {
            
        }
    }

    const b = new B();
    console.log(b);
}
