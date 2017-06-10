// https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer(arr) {

    var args = [...arguments].slice(1);
    
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);