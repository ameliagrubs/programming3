var express = require("express")
var app = express()

var server = require("http").Server(app)
var io = require("socket.io")(server)
var fs = require("fs")

app.use(express.static("."))

app.get("/",function(req,res){
   res.redirect("index.html")

})

server.listen(3000,function(){
   console.log("server is run");
})

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

matrix = matrixGenerator(30,17,7,4,2,6,8,10)

io.sockets.emit("send message",matrix)

///օբյեկտներ պահելու զանգվածներ
grassArr = []
grassEaterArr = []
predatorArr = []
omnivorousArr = []
restarterArr = []
hunterArr = []
seniorHunterArr = []

///modules

Grass = require("./grass")
GrassEater = require("./grassEater")
Hunter = require("./hunter")
Omnivorous = require("./omnivorous")
Predator = require("./predator")
Restarter = require("./restarter")
SeniorHunter = require("./seniorHunter")


///object creator

function createObject(){
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

io.sockets.emit("send message",matrix)