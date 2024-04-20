import { SHA256 } from 'crypto-js';

class Block {
    constructor(blockNo, data, prevHash = '') {
      this.blockNo = blockNo;
      this.timestamp = new Date();
      this.data = data;
      this.prevHash = prevHash;
      this.currentHash = this.calculateHash();
      this.nonce = 0
    }
  
    calculateHash() {
      return SHA256(this.blockNo + this.prevHash + JSON.stringify(this.data) + this.nonce).toString();
    }
  
    mineBlock(difficulty) {
      while (this.currentHash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
        this.nonce++;
        this.currentHash = this.calculateHash();
      }
      console.log("Block mined: " + this.currentHash);
    }
  }
  
  class Blockchain {
     constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 6
     }
  
     createGenesisBlock() {
      return new Block(0, "Genesis Block", "0");
     }
  
     getLatestBlock() {
      return this.chain[this.chain.length - 1];
     }
  
     addBlock(newBlock) {
      newBlock.prevHash = this.getLatestBlock().currentHash;
      newBlock.mineBlock(this.difficulty);
      this.chain.push(newBlock);
     }
  
     isValidChain() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if(currentBlock.currentHash !== currentBlock.calculateHash()){
          return false;
        }
        
        if(currentBlock.prevHash !== currentBlock.currentHash) {
          return false;
        }
      }
      return true;
     }
  }

export  { Block, Blockchain };