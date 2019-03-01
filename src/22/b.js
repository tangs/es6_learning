import { a } from './a';
import B from './c';

{
    console.log(a);
    const b = new B(10, 20);
    console.log(`${b}`);
}
