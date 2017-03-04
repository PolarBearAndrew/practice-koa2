

function myThunkFunc(thing) {
    return function(callback) {
        setTimeout(function() {
            console.log(thing);
            callback(null, 'World');
        }, 1000);
    };
}

async function myAsyncFunc() {
    var cb = await myThunkFunc('Hello');
    cb(function(err, str) {
        console.log(str)
    })
}

myAsyncFunc();

// myThunkFunc('Hello')(function(err, str) {
//     console.log(str)
// });


// promise 的版本
/* 
function myThunkFunc(thing) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(thing);
            resolve('World');
        }, 1000);
    });
}

async function myAsyncFunc() {
    var val = await myThunkFunc('Hello');
    console.log(val);
}

myAsyncFunc();
*/