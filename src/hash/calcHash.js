import { createHash } from 'crypto';
import { read } from '../fs/read.js';

const calculateHash = async (file) => {
    let content = await read(file);
    function sha256(content) {  
        return createHash('sha3-256').update(content).digest('hex')
      }
    console.log(sha256(content));
};

await calculateHash('./files/fileToCalculateHashFor.txt');