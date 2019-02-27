{
    class Point {

    }

    console.log(typeof Point);
    console.log(Point === Point.prototype.constructor);

    const p = new Point();
    console.log(Point === p.constructor);
}
