{
    class Point {
        constructor(x, y) {
            [this.x, this.y] = [x, y];
        }
    }

    console.log(typeof Point);
    console.log(Point === Point.prototype.constructor);

    const p = new Point(1, 2);
    const p1 = new p.constructor(3, 4);
    console.log(p1);
    console.log(Point === p.constructor);
}
 
{
    
}
