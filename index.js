fetchApi();
var apiData;

function fetchApi() {
    fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020")
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            apiData = data;
            console.log(apiData);
            renderUI(apiData);
        })
}



var secContainer = document.querySelector('.second-container');
var firstContainer = document.querySelector('.first-container');

function renderUI(apiData) {
    firstContainer.innerHTML = `<div class="middle-box">
        <div class="image"><img src="${apiData.results[0].picture.medium}"></div>
        <div class="description">
            <h1><u>${apiData.results[0].name.title}  ${apiData.results[0].name.first} ${apiData.results[0].name.last}</u></h1>
            <p> ${apiData.results[0].location.street.number}, ${apiData.results[0].location.city}, ${apiData.results[0].location.state}, ${apiData.results[0].location.country}, ${apiData.results[0].location.postcode}</p>
            <p style="color:rgb(103, 100, 100);">${apiData.results[0].gender}</p>

        </div>
    </div>`
    for (var i = 0; i <= 20; i++) {
        secContainer.innerHTML += `<div class="small-container" id="${i}">
            <p class="gender">${apiData.results[i].gender} . NZ</p>
            <h5 class="name">${apiData.results[i].name.title}  ${apiData.results[i].name.first} ${apiData.results[i].name.last}</h5>
        <p class="email">${apiData.results[i].email}</p>
        </div> `

        eventHandling(apiData);
    }

}

function eventHandling(apiData) {
    var secContainer = document.querySelector('.second-container');
    secContainer.addEventListener('click', function(e) {

        var targetParent = e.target.closest('.small-container');
        targetParent.classList.toggle("selected");
        if (targetParent) {
            featuringUI(targetParent.id, apiData);
        }
    })
}


function featuringUI(targetID, apiData) {
    firstContainer.innerHTML = `<div class="middle-box">
        <div class="image"><img src="${apiData.results[targetID].picture.medium}"></div>
        <div class="description">
            <h1><u>${apiData.results[targetID].name.title}  ${apiData.results[targetID].name.first} ${apiData.results[targetID].name.last}</u></h1>
            <p> ${apiData.results[targetID].location.street.number}, ${apiData.results[targetID].location.city}, ${apiData.results[targetID].location.state}, ${apiData.results[targetID].location.country}, ${apiData.results[targetID].location.postcode}</p>
            <p style="color:rgb(103, 100, 100);">${apiData.results[targetID].gender}</p>

        </div>
    </div>`
}