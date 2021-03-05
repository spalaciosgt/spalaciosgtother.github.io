// Prophets JSON source
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// Fetch function
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {        
        console.table(jsonObject); 

        // Loading JSON object into prophets object array
        const prophets = jsonObject['prophets'];

        // Loop for rendering each prophet card
        for (let i = 0; i < prophets.length; i++) {


            /*
             Adding tags
            */

            // Section
            let card = document.createElement('section');

            // Picture                        
            let picture = document.createElement('img');

            // Information
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');

            /*
             Setting attributes
            */

            // Picture
            picture.setAttribute('src', prophets[i].imageurl);
            picture.setAttribute('loading', 'lazy');
            picture.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);
            
            // Information
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            p3.textContent = 'Number of Children: ' + prophets[i].numofchildren;
            p4.textContent = 'Prophet #' + prophets[i].order;

            /*
             Final appendings
            */ 
            card.appendChild(picture);
            card.appendChild(h2);            
            card.appendChild(p1);            
            card.appendChild(p2);            
            card.appendChild(p3);            
            card.appendChild(p4);            
            document.querySelector('div.cards').appendChild(card);           
        }
    });