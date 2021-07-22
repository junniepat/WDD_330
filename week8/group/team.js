//variable containing url request
const requestURL = "https://swapi.dev/api/people";

//fetch request from URL
fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("list")
            Object.keys(data).forEach(function (key, index){
                var newItem = document.createElement("option")
                console.log(list)
                newItem.textContent = key
                newItem.value = data[key]
                list.appendChild(newItem)
            }) 
            
        } 
    })

function getEnd(event){
    alert(event.target)
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].name)
        if (data != undefined){
            var list = document.getElementById("result")
            list.value = JSON.stringify(data)           
        } 
    })
}
    
