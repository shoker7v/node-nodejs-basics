import { createReadStream, createWriteStream } from 'fs';
import { Gunzip } from 'zlib';

const decompress = async () => {
    let readStream = createReadStream('./files/archive.gz');
    let writeStream = createWriteStream('./files/fileToCompress.txt');
    let decompressStream = Gunzip();

    readStream.pipe(decompressStream).pipe(writeStream); 
};

await decompress();