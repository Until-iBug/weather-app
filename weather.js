// Accessing HTML elements
let button=document.querySelector("button");
let inputbox=document.querySelector("input");
let temp=document.querySelector(".temp");
let nature=document.querySelector(".nature");
let loc=document.querySelector(".city");
//API fetching 
let APIkey="47d80ef37b3f479fbfa103526262406";
async function get_data(){
    let city=inputbox.value;
    let URL = "https://api.weatherapi.com/v1/current.json?key=" + APIkey + "&q=" + city;
    let res= await fetch(URL);
    let data=await res.json();
    console.log(data.location.name);
    console.log(data.current.temp_c);
    console.log(data.current.condition.text);
    temp.innerText=data.current.temp_c+"°C";
    nature.innerText=data.current.condition.text;
    loc.innerText=data.location.name;
}
button.addEventListener('click',( event )=>{
    get_data();
}
);
