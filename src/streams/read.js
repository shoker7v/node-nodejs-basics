import { createReadStream } from 'fs';

const read = async (path) => {

    let reader = createReadStream(path);

    reader.on('data', function (content) {
        process.stdout.write(content);
    });
};

await read('./files/fileToRead.txt');