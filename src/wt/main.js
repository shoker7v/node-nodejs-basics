import { Worker } from "worker_threads";

const performCalculations = async () => {

    let numberOfProccessors = 4; //hardcoded
    let startValue = 10;

    for (let i = 0; i < numberOfProccessors; i++) {
        let workerData = startValue + i;
        const worker = new Worker("./worker.js", { workerData });
        worker.on("message", incoming => console.log({ incoming }));
        worker.on("error", code => new Error(`Worker error with exit code ${code}`));
        worker.on("exit", code =>
            console.log(`Worker stopped with exit code ${code}`)
        );
        worker.postMessage("exit");
    }

};

await performCalculations(10);