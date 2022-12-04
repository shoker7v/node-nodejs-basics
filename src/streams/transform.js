const transform = async () => {

    let reversed = [];

    process.stdin.on("data", (chunk) => {
        reversed.push(chunk.toString('utf-8').split("").reverse().join(""));
        console.log(reversed);
    });
};

await transform();



