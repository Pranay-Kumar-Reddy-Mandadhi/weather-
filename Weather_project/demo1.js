let url="https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=658515b3e67de93a394c81ea91849777&units=metric"

// fetch(url).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

    let input =document.getElementById("city");
    let searchBtn =document.getElementById("search");


    searchBtn.addEventListener("click",() => {
        let city=input.value;
        if(!city.trim()){
            alert("write a city before searching")
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=658515b3e67de93a394c81ea91849777&units=metric`)
            .then(Response=>{
                if(Response.status==200){
                   return Response.json()
        }else{
            alert("enter the valid city name ")
        }
    })
            .then(data=>{
                console.log(data);
            
            if(data){
                displayweather(data);
            }
        })
            .catch(error => console.log(error))
        }
    });


    function displayweather(data)
    {
                document.getElementById("city-name").innerHTML=data.name;
                document.getElementById("temp").innerHTML=`${Math.round(data.main.temp)}℃`;
                document.getElementById("wind").innerHTML=`${Math.round(data.wind.speed)} km/hr`;
                document.getElementById("display").classList.replace("hidden","flex")
    }