var temp = 25 //conectar con el servicio meteo real

var showTempIcon

if (temp < 10) {
    showTempIcon = function (){
        var icon = document.createElement("div")
        icon.innerHTML = "icono de frio"
        document.body.appendChild(icon)
    }
}   else {
    showTempIcon = function (){
        var icon = document.createElement("div")
        icon.innerHTML = "icono de calor"
        document.body.appendChild(icon)
    }
}

showTempIcon()