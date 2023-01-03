// import sha256 from '@types/crypto-js';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

// import * as sha256 from 'crypto-js/sha256';
import crypto from 'crypto';

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {


  // static validateStructure = (aBlock: Block): boolean =>
  //   typeof aBlock.index === 'number' &&
  //   typeof aBlock.hash === 'string' &&
  //   typeof aBlock.prevHash === 'string' &&
  //   typeof aBlock.timeStamp === 'number' &&
  //   typeof aBlock.data === 'string';

  public hash: string;
  // public index: number;
  // public prevHash: string;
  // public data: string;
  // public timeStamp: number;

  constructor(
    // index: number,
    // hash: string,
    public prevHash: string,
    public height: number,
    public data: string,
    // timeStamp: number,
  ) {
    // this.index = index;
    this.hash = Block.calculateHash(prevHash, height, data);
    // this.prevHash = prevHash;
    // this.data = data;
    // this.timeStamp = timeStamp;
  }

  static calculateHash = (
    // index: number,
    prevHash: string,
    height: number,
    data: string,
  ) => {
    // sha256(index + prevHash + timeStamp + data).toString()
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }

}

// const genesisBlock: Block = new Block(0, '2020202020220', '', 'Hi', 123456);

// let blockChain: Block[] = [genesisBlock];

// const getBlockChain = (): Block[] => blockChain;

// const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

// const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// const createNewBlock = (data: string): Block => {
//   const prevBlock: Block = getLatestBlock();
//   const newIndex: number = prevBlock.index + 1;
//   const newTimeStamp: number = getNewTimeStamp();
//   const newHash: string = Block.calculateBlockHash(
//     newIndex,
//     prevBlock.hash,
//     newTimeStamp,
//     data,
//   );
//   const newBlock: Block = new Block(
//     newIndex,
//     newHash,
//     prevBlock.hash,
//     data,
//     newTimeStamp,
//   );

//   addBlock(newBlock);

//   return newBlock;
// };

// // console.log(createNewBlock('hi'), createNewBlock('bye'));

// const getHashForBlock = (aBlock: Block): string =>
//   Block.calculateBlockHash(
//     aBlock.index,
//     aBlock.prevHash,
//     aBlock.timeStamp,
//     aBlock.data,
//   );

// const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean => {
//   if (!Block.validateStructure(candidateBlock)) {
//     return false;
//   } else if (prevBlock.index + 1 !== candidateBlock.index) {
//     return false;
//   } else if (prevBlock.hash !== candidateBlock.prevHash) {
//     return false;
//   } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addBlock = (candidateBlock: Block): void => {
//   if (isBlockValid(candidateBlock, getLatestBlock())) {
//     blockChain.push(candidateBlock);
//   }
// };

// createNewBlock('second block');
// createNewBlock('third block');
// createNewBlock('fourth block');

// console.log();

// export { };
