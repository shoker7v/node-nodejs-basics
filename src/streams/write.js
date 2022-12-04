import { createWriteStream } from 'fs';

export const write = async (path) => {
    
    let writer = createWriteStream(path);

    process.stdin.on("data", chunk => {
        writer.write(chunk);
    })
};

// await write('./files/fileToWrite.txt');