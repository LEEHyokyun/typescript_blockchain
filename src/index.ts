interface Human {
    name: string,
    age: number,
    job: string
}

const person = {
    name: "LEE HYO KYUN",
    age: 15,
    job: "ENGINEER"
}

const foo = (Human) => {
    return `HELLO ${Human.name}(_${Human.age})! How are your ${Human.job} going?`
}

console.log(foo(person))

export {}