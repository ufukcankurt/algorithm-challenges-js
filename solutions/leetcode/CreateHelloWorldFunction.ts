function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World"
    };
};

//? What will the following code return? Whatever it takes as a parameter, it will always return "Hello World".
/** 
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * f(1,2,3); // "Hello World"
 * f(true); // "Hello World"
 */

//! Explanation
// 1. The function `createHelloWorld` is defined without any parameters.
// 2. Inside this function, another function is returned. This inner function uses the rest parameter syntax (`...args`) to accept any number of arguments, although it does not utilize them.
// 3. The inner function simply returns the string "Hello World" whenever it is called.
// 4. The outer function `createHelloWorld` can be invoked to get the inner function, which can then be called to produce the desired output.
// Example usage:
// const f = createHelloWorld();
// console.log(f()); // Output: "Hello World"