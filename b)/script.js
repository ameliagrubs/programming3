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
let matrix = matrixGenerator(30,17,7,4,2,6,8,10)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var omnivorousArr = []
var restarterArr = []
var hunterArr = []
var seniorHunterArr = []


function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        }else if(matrix[y][x] == 2){
                             let grEat = new  GrassEater(x,y)
                             grassEaterArr.push(grEat)
                        }else if(matrix[y][x] ==  3){
                             let pre = new Predator(x,y)
                             predatorArr.push(pre)
                        }else if(matrix[y][x] == 4){
                                let omn = new Omnivorous(x,y)
                                omnivorousArr.push(omn)
                        }else if (matrix[y][x] == 5) {
                                var re = new restarter(x, y)
                                restarterArr.push(re)
                        }else if (matrix[y][x] == 6) {
                                var hun = new Hunter(x, y)
                                hunterArr.push(hun)
                        }else if (matrix[y][x] == 7){
                                var sen = new SeniorHunter(x,y)
                                seniorHunterArr.push(sen)
                        }

                }
        }

}


function draw() {
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



                for (let i in grassArr) {
                        grassArr[i].mul()
                }


                for(let i in grassEaterArr){
                        grassEaterArr[i].eat()
                }

             

                for(let i in predatorArr){
                        predatorArr[i].eat()
                }


                for(let i in omnivorousArr){
                        omnivorousArr[i].eat()
                }


                for(let i in hunterArr){
                        hunterArr[i].eat()
                }

                for(let i in seniorHunterArr){
                        seniorHunterArr[i].eat()
                }
 


}


