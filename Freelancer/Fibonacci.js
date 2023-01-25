function Fibonacci(n){
     
    if (n <= 0) return 0
    if (n == 1) return 1

    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
console.log(Fibonacci(10))