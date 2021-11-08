let board = ""
let size = 8 

for (let r = 0; r < size; r += 1) {
   
    for (let i = 0; i < size; i+=1) {
        console.log((r+i))
        if ((r+i)% 2 === 0) { 
            board = board + " "
        } else {
            board = board + "#"
        }   
    }
    board = board + "\n"
}

console.log(board)