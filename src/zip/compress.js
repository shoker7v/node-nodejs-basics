import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    let readStream = createReadStream('./files/fileToCompress.txt');
    let writeStream = createWriteStream('./files/archive.gz');
    let compressStream = createGzip();

    readStream.pipe(compressStream).pipe(writeStream);
};

await compress();