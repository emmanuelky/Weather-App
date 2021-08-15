const btn = document.querySelector(".btn")
const query = document.querySelector(".value")
const city = document.querySelector(".city")
const temp = document.querySelector(".temperature")


btn.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + query.value + `&appid=2e5f08bfe5cce317674a1031f2d125e8`)
        .then(response => response.json())
        .then(data => {

            city.innerHTML = `<h1 class="my-5 mx-5">${data.name}</h1>`

            temp.innerHTML = `<h4 class="mt-5">${data.weather[0].main}</h4>
                                 <h6 class="mb-4">(${data.weather[0].description})</h6>
                               <h4>Temperature:<h1>${data.main.temp.toFixed() + '&deg' + 'c'}</h1></h4>`


            console.log(data)
        })
        .catch((error) => error)
})


//clouds, rain, clear, 


