let board = ""
let size = 8 

for (let r = 0; r < size; r++) {
   
    for (let i = 0; i < size; i++) {
        if ((r+i)% 2 === 0) { 
            board += " "
        } else {
            board += "#"
        }   
    }
    board += "\n"
}

console.log(board)