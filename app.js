window.onload = () => {
    getData()
}



const getData = (query) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2e5f08bfe5cce317674a1031f2d125e8`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => error)
}
