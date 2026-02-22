function runSequential(tasks, delay){
    return tasks.reduce((promise, task) => {
        return promise.then(results =>{
            return new Promise(resolve => {
                setTimeout(async() =>{
                    try{
                        const result = await task();
                        resolve([...results, result]);
                    } catch (error) {
                        throw error;
                    }
                }, delay);
            });
        });
    }, Promise.resolve([]));
}

async function task1() {
    return "Task1 result";
}

async function task2() {
    return "Task2 result";
}

runSequential([task1, task2], 1000)
.then(results => console.log("Results:", results))
.catch(err => console.error("Error:", err))