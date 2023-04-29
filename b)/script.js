var socket = io()
let side = 30
let weather1= "winter";
let myChart;

function changer(){
        if(weather1 == "winter"){
            document.getElementById("wstyle").style.color = "#8d05e8";
        }
        else{
            document.getElementById("wstyle").style.color = "white";
        }
    }

function setup() {
        createCanvas(30 * side, 30 * side)
       
}

// function kill() {
//         io.sockets.emit("send message", matrix);
//     }
// function spawnGr() {
//         io.sockets.emit("send message", matrix);
//     }
// function spawnGrEater(){
//         io.socket.emit("send message", matrix)
//     }
// function spawnPre(){
//         io.socket.emit("send message", matrix)
//     }
// function spawnPre(){
//         io.socket.emit("send message", matrix)
//     }
//     function killPred(){
//         io.socket.emit("send message", matrix)
//     }


// document.getElementById("weather").innerHTML = weather1;
//     document.getElementById("wstyle").style.backgroundColor = weathSwitcher[weather1]
//     const data = {
//         labels: [
//           'Grass',
//           'GrassEater',
//         ],
//         datasets: [{
//           label: 'Chart of game',
//           data: [15,15,15,15,15],
//           backgroundColor: [
//             'rgb(0, 128, 0)',
//             'rgb(255, 255, 0)',
//           ],
//          hoverOffset: 2
//         }]
//       };
//     const config = {
//         type: 'doughnut',
//         data: data,
//         options: {
//             plugins: {
//                 legend: {
//                     display: true,
//                     labels: {
//                         color: '#fff'
//                     }
//                 }
//             }
//         }
//       };
//       myChart = new Chart(
//         document.getElementById('myChart'),
//         config
      
//       );
      
      
//     changer();
   



//     socket.on ('weather', function(data){
//         weather1 = data;
//         document.getElementById("weather").innerHTML = weather1;
//         document.getElementById("wstyle").style.backgroundColor = weathSwitcher[weather1]
       
//           changer();
//     })
    
//     socket.on ("send datas", function(counts){
//         document.getElementById("grass").innerHTML = counts.grass;
//         document.getElementById("grassEater").innerHTML = counts.grassEater;
        
//         myChart.data.datasets[0].data = [counts.grass, counts.grassEater, counts.grassEaterEater, counts.coines, counts.bankAutos];
//         myChart.update();
//     })

 
// weathSwitcher = {
//     winter: "white",
//     spring: "#62D319",
//     summer: "green",
//     autumn: "#C75520"
// }


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



               


}

socket.on("send message",nkarel)





