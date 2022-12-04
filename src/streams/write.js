import { createWriteStream } from 'fs';

const write = async (path) => {
    let writer = createWriteStream(path);

    process.stdin.on("data", data => {
        writer.write(data);
    })
};

await write('./files/fileToWrite.txt');