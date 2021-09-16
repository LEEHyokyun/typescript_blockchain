class Human{
    private name: string
    public age: number
    public job: string
    constructor(name: string, age: number, job: string){
        this.name = name
        this.age = age
        this.job = job
    }
}

const person1 = new Human("LEE HYO KYUN", 15, "Developer")

const foo = (person: Human) => {
    return `HELLO ${person.name}(_${person.age})! How are your ${person.job} going?`
}

console.log(foo(person1))

export {}