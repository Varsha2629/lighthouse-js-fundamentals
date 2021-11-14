const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
const finalPosition = (moves) => {
    // Your code in here ...
    let position = [0, 0];

    for (let move of moves) {

        if (move === "north") {
            position[1] + 1;
        } else if (move === "west") {
            position[0] - 1;
        } else if (move === "east") {
            position[0] + 1;
        } else {
            position[1]--;
        }

    }
    return position
}

console.log(finalPosition(moves));