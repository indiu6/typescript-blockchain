"use strict";
exports.__esModule = true;
var sha256_1 = require("crypto-js/sha256");
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';
var Block = /** @class */ (function () {
    function Block(index, hash, prevHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
    Block.calculateBlockHash = function (index, prevHash, timeStamp, data) { return sha256_1["default"](index + prevHash + timeStamp + data).toString(); };
    return Block;
}());
var genesisBlock = new Block(0, '2020202020220', '', 'Hi', 123456);
var blockChain = [genesisBlock];
var getBlockChain = function () { return blockChain; };
var getLatestBlock = function () { return blockChain[blockChain.length - 1]; };
var getNewTimeStamp = function () { return Math.round(new Date().getTime() / 1000); };
var createNewBlock = function (data) {
    var prevBlock = getLatestBlock();
    var newIndex = prevBlock.index + 1;
    var newTimeStamp = getNewTimeStamp();
    var newHash = Block.calculateBlockHash(newIndex, prevBlock.hash, newTimeStamp, data);
    var newBlock = new Block(newIndex, newHash, prevBlock.hash, data, newTimeStamp);
    return newBlock;
};
console.log(createNewBlock('hi'), createNewBlock('bye'));
