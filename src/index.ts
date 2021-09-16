class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

// declare : type
const firstBlock : Block = new Block(0, "20200916", "", "FIRST", 0);

// declare : type(array)
// array only allows the same class as Block.
let blockchain : [Block] = [firstBlock]

// check the log
console.log(blockchain)

export {}