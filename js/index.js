'use strict'

let one=document.getElementById('first-input');
let btn=document.getElementById('btn-find');
 async function getData(data) {
    let myHttp= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f2021a70a1f44d485e212350242909&q=${data}&days=3`);
   
    let myData=await myHttp.json();
    let finalData=myData;
    console.log(finalData);
    // console.log(finalData.forecast.forecastday[0].day.condition.icon);
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
          <div class="about-con">
            <h6 class="mt-4">${finalData.location.name}</h6>
            <h1 class="text-center text-light">${finalData.current.temp_c}</h1>
             <img class="" src="${finalData.current.condition.icon}" alt="A picture of the weather">
            <h6 class=" text-info mt-3">${finalData.current.condition.text}</h6>
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

  
    let cart=`<div class="count-head d-flex justify-content-center ">
                    <h6 class="text-center">${res}</h6>
                   
                  </div>
                  <div class="about-con mt-5 d-flex justify-content-center flex-column py-5">
                   <img class= "" src=${finalData.forecast.forecastday[0].day.condition.icon}= alt="A picture of the weather">
                    <h1 class="text-center text-light head-1">${finalData.forecast.forecastday[0].day.mintemp_c}</h1>
                    <h1 class="text-center text-light head-2">${finalData.forecast.forecastday[0].day.maxtemp_c}</h1>
                   
                    <h6 class=" text-info mt-3 mx-auto">${finalData.forecast.forecastday[0].day.condition.text}</h6>
                   
                  </div>`
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
          let carto=`<div class="count-head d-flex justify-content-center ">
          <h6 class="text-center">${rest}</h6>
         
        </div>
        <div class="about-con mt-5 d-flex justify-content-center flex-column py-5">
         <img class="" src=${finalData.forecast.forecastday[1].day.condition.icon} alt="A picture of the weather">
          <h1 class="text-center text-light head-1">${finalData.forecast.forecastday[1].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2">${finalData.forecast.forecastday[1].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-3 mx-auto">${finalData.forecast.forecastday[1].day.condition.text}</h6>
         
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
async function display() {
   let myHttp= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f2021a70a1f44d485e212350242909&q=cairo&days=3`);
   
    let myData=await myHttp.json();
    let finalData=myData;
    console.log(finalData);
    console.log(finalData.forecast.forecastday[0]);
    console.log(finalData.location.name);
    let birthday =  new Date(finalData.current.last_updated);
let day1 = birthday.getDay();
   //  console.log(day1);
     let res;
let arr=['sunday','monday' ,'Tuesday','Wednesday','Thursday','Friday','Saturday']
for (let i = 0; i <arr.length ; i++) {
   if(day1==0){
      res=arr[0];
   }
   else if(day1==1){
    res=arr[1];
 }
 else if(day1==2){
    res=arr[2];
 }
 else if(day1==3){
    res=arr[3];
 }
 else if(day1==4){
    res=arr[4];
 }
 else if(day1==5){
    res=arr[5];
 }
 else if(day1==6){
    res=arr[6];
 }
    
}
const date = new Date(finalData.current.last_updated);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = date.getDate();    
const month = months[date.getMonth()]; 
// console.log(`${day} ${month} `); 
    let cartona=` 
        <div class="news-con">
          <div class="count-head d-flex justify-content-between ">
            <h6>${res}</h6>
            <h6 >${day}${month}</h6>
          </div>
          <div class="about-con">
            <h6 class="mt-4">${finalData.location.name}</h6>
            <h1 class="text-center text-light">${finalData.current.temp_c}</h1>
             <img class="w-25" src=${finalData.current.condition.icon} alt="A picture of the weather">
            <h6 class=" text-info mt-3">${finalData.current.condition.text}</h6>
           <div class="about-icons d-flex mt-4">
            <i class="fa-solid fa-umbrella fs-4 bro"></i><p class="mx-2 fs-6">20%</p>
            <i class="fa-solid fa-wind fs-4 bro"></i><p class="mx-2 fs-6">18km/h</p>
          <i class="fa-solid fa-earth-africa fs-4 bro"></i><p class="mx-2 fs-6">East</p>
           </div>
          </div>
        </div>`
          document.getElementById('demo').innerHTML=cartona;




         //  second------

    
  
    let cart=`<div class="count-head d-flex justify-content-center ">
                    <h6 class="text-center">${res}</h6>
                   
                  </div>
                  <div class="about-con mt-5 d-flex justify-content-center flex-column py-5">
                   <img class="w-25 m-auto" src=${finalData.forecast.forecastday[0].day.condition.icon} alt="A picture of the weather">
                    <h1 class="text-center text-light head-1">${finalData.forecast.forecastday[0].day.mintemp_c}</h1>
                    <h1 class="text-center text-light head-2">${finalData.forecast.forecastday[0].day.maxtemp_c}</h1>
                   
                    <h6 class=" text-info mt-3 mx-auto">${finalData.forecast.forecastday[0].day.condition.text}</h6>
                   
                  </div>`
          document.getElementById('demo-1').innerHTML=cart;


          let birth = new Date(finalData.forecast.forecastday[1].date);
          let day2 = birth.getDay(); 
          console.log(day2);
          
          let arr1 = ['sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let rest = arr1[day2]; 
          let carto=`<div class="count-head d-flex justify-content-center ">
          <h6 class="text-center">${rest}</h6>
         
        </div>
        <div class="about-con mt-5 d-flex justify-content-center flex-column py-5">
         <img class="w-25 m-auto" src=${finalData.forecast.forecastday[1].day.condition.icon} alt="A picture of the weather">
          <h1 class="text-center text-light head-1">${finalData.forecast.forecastday[1].day.mintemp_c}</h1>
          <h1 class="text-center text-light head-2">${finalData.forecast.forecastday[1].day.maxtemp_c}</h1>
         
          <h6 class=" text-info mt-3 mx-auto">${finalData.forecast.forecastday[1].day.condition.text}</h6>
         
        </div>`
document.getElementById('demo-2').innerHTML=carto;
   
    
}


 display();



