export default class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    toString() {
        return `(${this.a}, ${this.b})`;
    }
}
