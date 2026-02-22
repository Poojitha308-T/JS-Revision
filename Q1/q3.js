function mySetInterval(callback, delay){
    let timerId = {};
    let isRunning = true;

    function repeat() {
        if(isRunning){
            callback();
            timerId.timeout = setTimeout(repeat, delay);
        }
    }

    timerId.timeout = setTimeout(repeat, delay);

    function myClearInterval(id){
        clearTimeout(id.timeout);
        isRunning = false;
    }
    return {id: timerId, clear: myClearInterval};
}

const interval = mySetInterval(() => console.log("Timer"), 500);
setTimeout(() => interval.clear(interval.id), 2000);