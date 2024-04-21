import { Block } from "./block";
import { SHA256 } from "crypto-js";

export class Blockchain {
  constructor() {
    this.chain = [this.initGenesisBlock()];
    this.pendingTransactions = [];
    this.miningReward = 100;
    this.difficulty = 4;
  }

  initGenesisBlock() {
    let prevHash =
      "0000000000000000000000000000000000000000000000000000000000000000";
    let data = "Initial Block in the Chain";
    let firstBlock = new Block(
      prevHash,
      0,
      data,
      "0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a"
    );
    firstBlock.nonce = 12424;
    return firstBlock;
  }

  calculateHash(block, testNonce) {
    return SHA256(
      testNonce + block.data + block.index + block.prevHash
    ).toString();
  }

  validateHash = (block) => {
    return (
      this.calculateHash(block, block.nonce).substring(0, this.difficulty) ===
      Array(this.difficulty + 1).join("0")
    );
  };

  updateChain(block) {
    // update hash for each block starting at this block and looping through the rest of the chain + validate new hashes
    for (let i = block.index; i < this.chain.length; i++) {
      this.chain[i].prevHash = this.chain[i - 1].hash;
      this.chain[i].hash = this.calculateHash(
        this.chain[i],
        this.chain[i].nonce
      );
      this.chain[i].error = !this.validateHash(this.chain[i]);
    }
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  mineBlock(block, isChain) {
    if (!this.validateHash(block)) {
      let testNonce = 0;
      while (
        this.calculateHash(block, testNonce).substring(0, this.difficulty) !==
        Array(this.difficulty + 1).join("0")
      ) {
        testNonce++;
      }
      this.chain[block.index].nonce = testNonce;
      this.chain[block.index].hash = this.calculateHash(block, testNonce);
      this.chain[block.index].error = !this.validateHash(block);

      if (isChain) {
        this.updateChain(block);
      }
      return this.chain;
    } else {
      this.chain[block.index].error = false;
      return this.chain;
    }
  }

  addNewBlock(data, prevHash) {
    // calculate initial values for new block and instantiate it
    if (!prevHash) prevHash = this.chain[this.chain.length - 1].hash;
    let index = this.chain.length;
    let newBlock = new Block(prevHash, index, data);
    // push block to chain
    this.chain.push(newBlock);

    this.mineBlock(this.chain[index], false);
    this.chain[index].hash = this.calculateHash(newBlock, newBlock.nonce);

    return this.chain;
  }
  addNewComputedBlock(data, prevHash) {
    // calculate initial values for new block and instantiate it
    if (!prevHash) prevHash = this.chain[this.chain.length - 1].hash;
    let index = this.chain.length;
    let newBlock = new Block(prevHash, index, JSON.stringify(data));
    newBlock.transactions = data;
    // push block to chain
    this.chain.push(newBlock);

    this.mineBlock(this.chain[index], false);
    this.chain[index].hash = this.calculateHash(newBlock, newBlock.nonce);

    return this.chain;
  }

  updateBlockData(blockIndex, data) {
    this.chain[blockIndex].data = data;
    this.chain[blockIndex].hash = this.calculateHash(
      this.chain[blockIndex],
      this.chain[blockIndex].nonce
    );
    this.chain[blockIndex].error = !this.validateHash(this.chain[blockIndex]);
    this.updateChain(this.chain[blockIndex]);

    return this.chain;
  }

  updateBlockNonce(blockIndex, nonce) {
    this.chain[blockIndex].nonce = nonce;
    this.chain[blockIndex].hash = this.calculateHash(
      this.chain[blockIndex],
      nonce
    );
    this.chain[blockIndex].error = !this.validateHash(this.chain[blockIndex]);
    this.updateChain(this.chain[blockIndex]);

    return this.chain;
  }

  updateBlockTransactions(blockIndex, transactionIndex, key, value) {
    this.chain[blockIndex].transactions[transactionIndex][key] = value;
    this.chain[blockIndex].data = JSON.stringify(
      this.chain[blockIndex].transactions
    );

    this.updateChain(this.chain[blockIndex]);

    return this.chain;
  }
}
