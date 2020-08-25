console.log("Hello! this is my first independent web project and there are still some minor problems that I will correct in future. thank you for visiting")
var x=5;
let time=x*60;
var status="stopped";
   function countdown()  {
    let min=Math.floor(time/60);
       let seconds=time%60;
       time--;
       if(seconds<10)
       { seconds="0"+seconds.toString();}
       document.getElementById("countdown").textContent =min+" : "+seconds;
       
       if (time<= 0) {
           alert("Times up!");
           
           clearInterval(interval);
           countwords();
           }

   }
        const countwords = () =>
        {
            let now=document.getElementById('words').value;
            now=now.match( /\w+/g );
            now=now.length;
            console.log(now);
            document.getElementById('showdata').innerHTML="The total character="+noc;
            document.getElementById('showdata').innerHTML="Great! you have typed "+now+"word(s)";
        }
        function startstop()
    {
           var interval=setInterval(countdown,1000);
            document.getElementById("startstop").innerHTML="stop";
            
        // function to reset dtopwatch

    }
        