'use strict'

let one=document.getElementById('first-input');
let btn=document.getElementById('btn-find');
 async function getData(data) {
    let myHttp= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f2021a70a1f44d485e212350242909&q=${data}&days=3`);
   
    let myData=await myHttp.json();
    let finalData=myData;
    console.log(finalData);
  
    console.log('hi');
    console.log(finalData.current.condition.icon);
    
    console.log(finalData.forecast.forecastday[0].day.condition.icon);
    console.log(finalData.location.name);
    let birthday = new Date(finalData.current.last_updated);
    let day1 = birthday.getDay();
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let res = arr[day1];
const date = new Date(finalData.current.last_updated);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = date.getDate();    
const month = months[date.getMonth()]; 

    let cartona=` 
       <div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6>${res}</h6>
                  <h6 >${day}${month}</h6>
                </div>
                <div class="about-con ps-3">
                  <h6 class="mt-4">${finalData.location.name}</h6>
                  <h1 class="text-center text-light">${finalData.current.temp_c}</h1>
                   <img class="" src="${finalData.current.condition.icon}" alt="A picture of the weather">
                  <h6 class=" text-info mt-3">sunny</h6>
                 <div class="about-icons d-flex mt-4">
                  <i class="fa-solid fa-umbrella fs-4 bro"></i><p class="mx-2 fs-6">20%</p>
                  <i class="fa-solid fa-wind fs-4 bro"></i><p class="mx-2 fs-6">18km/h</p>
                <i class="fa-solid fa-earth-africa fs-4 bro"></i><p class="mx-2 fs-6">East</p>
                 </div>
                </div>
              </div>
         `
          document.getElementById('demo').innerHTML=cartona;




         //  second------

  
    let cart=`<div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6 class="text-center m-auto pb-2">${res}</h6>
                 
                </div>
                <div class="about-con ps-3 mt-5">
                       <img class="m-auto w-25" src="${finalData.forecast.forecastday[0].day.condition.icon}" alt="A picture of the weather">
                   <h1 class="text-center text-light head-1 mt-3 ">${finalData.forecast.forecastday[0].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2 mt-3">${finalData.forecast.forecastday[0].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-5 mx-auto text-center">${finalData.forecast.forecastday[0].day.condition.text}</h6>
                 </div>
                </div>
              </div>
                  `
          document.getElementById('demo-1').innerHTML=cart;

           let daying=finalData.forecast.forecastday[1].date;
          let birth = new Date(daying);
          let day2 = birth.getDay();
          let arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let rest = arr1[day2];
          console.log('sad');
          console.log(rest);
          console.log(finalData.forecast.forecastday[1].date);
          console.log(finalData.forecast.forecastday[1].date);
          let carto=`<div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6 class="text-center m-auto pb-2">${rest}</h6>
                 
                </div>
                <div class="about-con ps-3 mt-5">
                       <img class="m-auto w-25" src="${finalData.forecast.forecastday[1].day.condition.icon}" alt="A picture of the weather">
                   <h1 class="text-center text-light head-1 mt-3 ">${finalData.forecast.forecastday[1].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2 mt-3">${finalData.forecast.forecastday[1].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-5 mx-auto text-center">${finalData.forecast.forecastday[1].day.condition.text}</h6>
                 </div>
                </div>
              </div>`
document.getElementById('demo-2').innerHTML=carto;
   
    
    

    
}

one.addEventListener('input',function(e){
    e.preventDefault();
    getData(encodeURIComponent(one.value));

})
btn.addEventListener('click',function(e){
    e.preventDefault();
    getData(encodeURIComponent(one.value));

})



async function display(data) {
   let myHttp= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f2021a70a1f44d485e212350242909&q=${encodeURIComponent(data)}&days=3`);
   
    let myData=await myHttp.json();
    let finalData=myData;
    console.log(finalData);
    console.log(finalData.forecast.forecastday[0]);
    console.log(finalData.location.name);
    let birthday = new Date(finalData.current.last_updated);
    let day1 = birthday.getDay();
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let res = arr[day1];
const date = new Date(finalData.current.last_updated);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = date.getDate();    
const month = months[date.getMonth()]; 

    let cartona=` 
      <div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6>${res}</h6>
                  <h6 >${day}${month}</h6>
                </div>
                <div class="about-con ps-3">
                  <h6 class="mt-4">${finalData.location.name}</h6>
                  <h1 class="text-center text-light">${finalData.current.temp_c}</h1>
                   <img class="" src="${finalData.current.condition.icon}" alt="A picture of the weather">
                  <h6 class=" text-info mt-3">sunny</h6>
                 <div class="about-icons d-flex mt-4">
                  <i class="fa-solid fa-umbrella fs-4 bro"></i><p class="mx-2 fs-6">20%</p>
                  <i class="fa-solid fa-wind fs-4 bro"></i><p class="mx-2 fs-6">18km/h</p>
                <i class="fa-solid fa-earth-africa fs-4 bro"></i><p class="mx-2 fs-6">East</p>
                 </div>
                </div>
              </div>
        `
          document.getElementById('demo').innerHTML=cartona;




         //  second------

    
  
    let cart=`<div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6 class="text-center m-auto pb-2">${res}</h6>
                 
                </div>
                <div class="about-con ps-3 mt-5">
                       <img class="m-auto w-25" src="${finalData.forecast.forecastday[0].day.condition.icon}" alt="A picture of the weather">
                   <h1 class="text-center text-light head-1 mt-3 ">${finalData.forecast.forecastday[0].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2 mt-3">${finalData.forecast.forecastday[0].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-5 mx-auto text-center">${finalData.forecast.forecastday[0].day.condition.text}</h6>
                 </div>
                </div>
              </div>
                  `
          document.getElementById('demo-1').innerHTML=cart;


          let birth = new Date(finalData.forecast.forecastday[1].date);
          let day2 = birth.getDay(); 
          console.log(day2);
          
          let arr1 = ['sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let rest = arr1[day2]; 
          let carto=`<div class="news-con">
                <div class="count-head d-flex justify-content-between ">
                  <h6 class="text-center m-auto pb-2">${rest}</h6>
                 
                </div>
                <div class="about-con ps-3 mt-5">
                       <img class="m-auto w-25" src="${finalData.forecast.forecastday[1].day.condition.icon}" alt="A picture of the weather">
                   <h1 class="text-center text-light head-1 mt-3 ">${finalData.forecast.forecastday[1].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2 mt-3">${finalData.forecast.forecastday[1].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-5 mx-auto text-center">${finalData.forecast.forecastday[1].day.condition.text}</h6>
                 </div>
                </div>
              </div>
        `
document.getElementById('demo-2').innerHTML=carto;
   
    
}


  // display();

  async function get() {
    fetch('https://ipinfo.io/json?token=179923572cb2af')
      .then(response => response.json())
      .then(data => {
        const city = data.city;      
        const region = data.region;  
        const country = data.country; 
  
        console.log(`City: ${city}, Region: ${region}, Country: ${country}`);
  
        if (region) {
          display(encodeURIComponent(city)); 
        } else {
          console.error('Region is not defined');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  get(); 
  


