// https://www.freecodecamp.com/challenges/mutations

function mutation(arr) {
    
    return arr[1].toLowerCase()
        .split('')
        .every(letter => {
        return arr[0]
            .toLowerCase()
            .indexOf(letter) !== -1;  
    });
}

console.log(mutation(["Alien", "line"]));