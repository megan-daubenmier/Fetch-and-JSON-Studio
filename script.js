window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(json) {
        const container = document.querySelector("#container");
        
        json.sort((a, b) => {return b.hoursInSpace - a.hoursInSpace});

        for(let i = 0; i < json.length; i++) {
            let pic = json[i]["picture"];
            container.innerHTML += `
            <div class='astronaut'>
                <div class='bio'>
                    <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
                    <ul>
                        <li>Hours in space: ${json[i]["hoursInSpace"]}</li>
                        <li ${json[i].active ? 'id = green' : 'id = black'}>Active: ${json[i]["active"]}</li>
                        <li>Skills: ${json[i]["skills"].join(", ")}</li>
                    </ul>
                </div>
            <img class="avatar" src="${pic}"/>
            </div>`;
        }
        document.getElementById('count').innerHTML += `: ${json.length}`;
    });
});