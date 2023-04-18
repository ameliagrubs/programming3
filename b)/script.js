function matrixGenerator(matrixSize, grass,grassEater,predator, omnivorous, restarter, hunter, seniorHunter) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
         //GrassEater 2
         //test
         for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 predator


        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //4 omnivorous
        for (let i = 0; i < omnivorous; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }
        //5 restarter
        for (let i = 0; i < restarter; i++) {

                var x = Math.floor(Math.random() * matrixSize)
                var y = Math.floor(Math.random() * matrixSize)
        
                matrix[y][x] = 5
        }
        //6 hunter
        for (let i = 0; i < hunter; i++) {

                var x = Math.floor(Math.random() * matrixSize)
                var y = Math.floor(Math.random() * matrixSize)
        
                matrix[y][x] = 6
        }
        //7 seniorHunter
        for (let i = 0; i < seniorHunter; i++) {

                var x = Math.floor(Math.random() * matrixSize)
                var y = Math.floor(Math.random() * matrixSize)
        
                matrix[y][x] = 7

        }

        return matrix
}
var socket = io()


let side = 30



function setup() {
        createCanvas(30 * side, 10 * side)
       
}


function nkarel(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {


                        
                        if (matrix[y][x] == 1) {
                                fill("green")
                                
                        }else if(matrix[y][x] == 2){
                                fill ("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ("red")
                        }
                        else if(matrix[y][x] == 4){
                                fill ("black")
                        }
                        else if(matrix[y][x] == 5){
                                fill ("brown")
                        }else if(matrix[y][x] == 6){
                                fill ("aqua")
                        }else if(matrix[y][x] == 7){
                                fill ("blue")
                        }
                        else {
                                fill("gray")
                        }
                        
                        rect(x * side, y * side, side, side)

                }
        }



                // for (let i in grassArr) {
                //         grassArr[i].mul()
                // }


                // for(let i in grassEaterArr){
                //         grassEaterArr[i].eat()
                // }

             

                // for(let i in predatorArr){
                //         predatorArr[i].eat()
                // }


                // for(let i in omnivorousArr){
                //         omnivorousArr[i].eat()
                // }


                // for(let i in hunterArr){
                //         hunterArr[i].eat()
                // }

                // for(let i in seniorHunterArr){
                //         seniorHunterArr[i].eat()
                // }
 


}

io.socket.emit("send matrix",nkarel)





