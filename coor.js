function findState(){
    const loc = document.getElementById("loc")
    
    const success = (position) =>{
        const lat = position.coords.latitude
        const long = position.coords.longitude

        const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
        fetch(geoApi)
        .then(res => res.json())
        .then(data =>{
            loc.innerHTML = data.city
        })
    }
    const error = () => {
        loc.innerHTML = "Unable to Show"
    }

    navigator.geolocation.getCurrentPosition(success, error)

    loc.style.pointerEvents = "none";
    loc.style.backgroundColor = "unset";
    loc.style.color = "unset";
}