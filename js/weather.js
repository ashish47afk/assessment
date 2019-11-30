 
$(document).ready(function(){
   var a;
    function ab()
       {
        var city = $("#citytext").val();        //getting city name from the user
            $.ajax({
                url:"https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+a+
                "&APPID=d1b9d308b13c1ac063962ba3d5cfd72f",        
                type:"GET",
                datatype:"jsonp",
                success:function(data)
                {
                 console.log(data);
                    document.getElementById("valuelabel").innerHTML=data.main.temp;         // temperature
                   document.getElementById("cloud").innerHTML=data.weather[0].main;         // haze,cloudy,windy
                    document.getElementById("cityname").innerHTML=data.name;                //place name
                var icon="https://openweathermap.org/img/w/"+data.weather[0].icon+".png";   //getting cloud image
                document.getElementById("icon").src=icon; 
                },
                error:function(val)                                                                                     // on error this arrises
                {
                    document.getElementById("feedback").innerHTML="Place not Found/Incorrect Data";                     //printing
                }
                
            });
        }
        $("#cel").click(c);                                                 //function to show temperature in celcius
       function c()
       {
        $("#cel").css("background-color", "blue");
        a="metric";
        ab();                                                               //calling main method to calculate the temperature in celcius
       }   
});