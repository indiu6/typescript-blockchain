import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timeStamp: number;

  static calculateBlockHash = (
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timeStamp: number,
  ): string => {
    return sha256(index + prevHash + timeStamp + data).toString();
  };

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timeStamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timeStamp = timeStamp;
  }
}

const genesisBlock: Block = new Block(0, '2020202020220', '', 'Hi', 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
