import * as CryptoJS from "crypto-js"

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockhash = (index:number, previousHash:string, timestamp:number, data:string) => {
        return CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
    }

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
//static method
Block.calculateBlockhash

// declare : type
const firstBlock : Block = new Block(0, "20200916", "", "FIRST", 0);

// declare : type(array)
// array only allows the same class as Block.
let blockchain : Block[] = [firstBlock]

// check the log
console.log(blockchain)

//return type, array
const getBlockchain = () : Block[] => blockchain;

//return type, one Block object
const getLatestBlock = () : Block => blockchain[blockchain.length-1]

//return type, number
const getNewtimestamp = () : number => Math.round(new Date().getTime() / 1000)

//create new block
const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewtimestamp();
    const newHash: string = Block.calculateBlockhash(newIndex, previousBlock.hash, newTimestamp, data);

    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    return newBlock
}

console.log(createNewBlock("SECOND"))
console.log(createNewBlock("THIRD"))

export {}