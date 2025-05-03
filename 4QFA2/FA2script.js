      function start(){
        var inputOne = document.getElementById("input1").value;
        var inputTwo = document.getElementById("input2").value;
        
        if(inputOne < 2 || inputOne > 10 || inputTwo < 2 || inputTwo > 10){
          alert("Please enter numbers between 2 and 10");
        }
        else{
          let border = "<table border='1'>";
          for(let i = 1; i <= inputTwo; i++){
            border += "<tr>";
            for(let y = 1; y <= inputOne; y++){
              var ans = y*i;
              border += "<td>" + ans + "</td>";
            }
            border += "</tr>";
          }
          border += "</table>";
          document.getElementById("result").innerHTML = border;
        }
      }