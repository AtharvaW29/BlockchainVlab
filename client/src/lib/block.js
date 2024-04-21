import { SHA256 } from "crypto-js";

export class Block {
  constructor(prevHash, index, data, hash = 0) {
    this.prevHash = prevHash;
    this.index = index;
    this.nonce = 0;
    this.timeStamp = Date.now();
    this.data = data;
    this.hash = hash;
    this.error = false;
    this.transactions = [];
  }

  recalculateHash() {
    this.hash = SHA256(
      this.nonce + this.transactions + this.index + this.prevHash
    ).toString();
    return SHA256(
      this.nonce + this.data + this.index + this.prevHash
    ).toString();
  }
}
