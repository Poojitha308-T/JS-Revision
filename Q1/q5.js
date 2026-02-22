function createCountdown(seconds, onTick, onComplete){
    let remaining = seconds;
    let timerId;
    let paused = false;

    function tick(){
        if(!paused){
            onTick(remaining);
            if(remaining === 0){
                clearInterval(timerId);
                onComplete();
            }
            remaining--;
        }
    }
    timerId = setInterval(tick, 1000);

    return {
        pause(){
            paused = true; 
        },
        resume(){
            paused = false;
        }
    };
}

function onTick(remaining){
    console.log(`Remaining: ${remaining} seconds`)
}
function onComplete(){
    console.log("Completed");
}

const countdown = createCountdown(5, onTick, onComplete);
setTimeout(() => countdown.pause(), 1000);
setTimeout(() => countdown.resume(), 3000);