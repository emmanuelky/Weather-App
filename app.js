const btn = document.querySelector(".btn")
const query = document.querySelector(".value")
const city = document.querySelector(".city")
const temp = document.querySelector(".temperature")



btn.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + query.value + `&appid=2e5f08bfe5cce317674a1031f2d125e8`)
        .then(response => response.json())
        .then(data => {

            //Get Sun Rise 
            let sunRise = data.sys.sunrise
            console.log(sunRise)

            let unix_timestampSunRise = sunRise
            let dateSunRise = new Date(unix_timestampSunRise * 1000);
            let hoursSunRise = dateSunRise.getHours();
            let minutesSunRise = "0" + dateSunRise.getMinutes();
            // let secondsSunRise = "0" + dateSunRise.getSeconds();

            let sunRiseTime = hoursSunRise + ':' + minutesSunRise.substr(-2)
            // + ':' + secondsSunRise.substr(-2);

            console.log(sunRiseTime);

            //Get Sun Set 
            let sunSet = data.sys.sunset
            console.log(sunSet)

            let unix_timestampSunSet = sunSet
            let dateSunSet = new Date(unix_timestampSunSet * 1000);
            let hoursSunSet = dateSunSet.getHours();
            let minutesSunSet = "0" + dateSunSet.getMinutes();
            // let secondsSunSet = "0" + dateSunSet.getSeconds();

            let sunSetTime = hoursSunSet + ':' + minutesSunSet.substr(-2)
            // + ':' + secondsSunSet.substr(-2);

            console.log(sunSetTime);


            city.innerHTML = `<div class=""><h1 class="my-5 mx-5">${data.name} (${data.sys.country})</h1></div>`
            temp.innerHTML = `<div class="d-flex flex-wrap flex-column">
            <div><h3 class="mt-5">${data.weather[0].main}</h3></div>
            <div> <h6 class="mb-4">(${data.weather[0].description})</h6></div>
            <div> <h4>Temperature:<h1>${data.main.temp.toFixed().toString().substr(0, 2) + '&deg' + 'c'}</h1></h4></div>
            <div class="d-flex flex-wrap flex-column"> <h6 class="mb-0 align-self-center mb-5 mt-5 text-dark">Sun Rise <i class="bi bi-sunrise-fill align-self-center" style="font-size: 30px"></i> (${sunRiseTime} A.M)</h6>
            <h6 class="align-self-center mb-5 text-dark">Sun Set <i class="bi bi-sunset-fill align-self-center" style="font-size: 30px"></i> (${sunSetTime} P.M)</h6></div></div>`


            console.log(data)
        })
        .catch((error) => error)


})


const defaultCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=2e5f08bfe5cce317674a1031f2d125e8`)
        .then(response => response.json())
        .then(data => {
            //Get Sun Rise 
            let sunRise = data.sys.sunrise
            console.log(sunRise)

            let unix_timestampSunRise = sunRise
            let dateSunRise = new Date(unix_timestampSunRise * 1000);
            let hoursSunRise = dateSunRise.getHours();
            let minutesSunRise = "0" + dateSunRise.getMinutes();
            // let secondsSunRise = "0" + dateSunRise.getSeconds();

            let sunRiseTime = hoursSunRise + ':' + minutesSunRise.substr(-2)
            // + ':' + secondsSunRise.substr(-2);

            console.log(sunRiseTime);

            //Get Sun Set 
            let sunSet = data.sys.sunset
            console.log(sunSet)

            let unix_timestampSunSet = sunSet
            let dateSunSet = new Date(unix_timestampSunSet * 1000);
            let hoursSunSet = dateSunSet.getHours();
            let minutesSunSet = "0" + dateSunSet.getMinutes();
            // let secondsSunSet = "0" + dateSunSet.getSeconds();

            let sunSetTime = hoursSunSet + ':' + minutesSunSet.substr(-2)
            // + ':' + secondsSunSet.substr(-2);

            console.log(sunSetTime);

            city.innerHTML = `<div class=""><h1 class="my-5 mx-5">${data.name} (${data.sys.country})</h1></div>`
            temp.innerHTML = `<div class="d-flex flex-wrap flex-column">
            <div><h3 class="mt-5">${data.weather[0].main}</h3></div>
            <div> <h6 class="mb-4">(${data.weather[0].description})</h6></div>
            <div> <h4>Temperature:<h1>${data.main.temp.toFixed().toString().substr(0, 2) + '&deg' + 'c'}</h1></h4></div>
            <div class="d-flex flex-wrap flex-column"> <h6 class="mb-0 align-self-center mb-5 mt-5 text-dark">Sun Rise <i class="bi bi-sunrise-fill align-self-center" style="font-size: 30px"></i> (${sunRiseTime} A.M)</h6>
            <h6 class="align-self-center mb-5 text-dark">Sun Set <i class="bi bi-sunset-fill align-self-center" style="font-size: 30px"></i> (${sunSetTime} P.M)</h6></div></div>`
            console.log(data)
        })
        .catch((error) => error)

}


window.onload = () => {
    defaultCity()

}
//clouds, rain, clear,


