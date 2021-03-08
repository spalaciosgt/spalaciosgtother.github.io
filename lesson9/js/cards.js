// Towns JSON source
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Fetch function
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {        
        console.table(jsonObject); 
        
        // Loading JSON object into towns object array
        const towns = jsonObject['towns'];

        let j = 0;

        // Loop for rendering each prophet card
        for (let i = 0; i < towns.length; i++) {
            let cityName = towns[i].name;

            if (cityName.localeCompare("Fish Haven") == 0 ||
                cityName.localeCompare("Preston") == 0 ||
                cityName.localeCompare("Soda Springs") == 0) {
                
                j++;

                /*
                 Adding tags
                */

                // Section
                let card = document.createElement('div');

                // Picture                        
                let picture = document.createElement('img');

                // Information
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                
                /*
                 Setting attributes
                */

                // Picture
                picture.setAttribute('src', "images/" + towns[i].photo);
                picture.setAttribute('loading', 'lazy');
                picture.setAttribute('alt', towns[i].name);

                if (j % 2 == 0) {
                    picture.setAttribute('class', "cardImageR");  
                } else {
                    picture.setAttribute('class', "cardImageL");         
                }                
                
                // Information
                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
                p2.textContent = 'Population: ' + towns[i].currentPopulation;
                p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;       
                
                h2.setAttribute('class', "cardHeader");  
                h3.setAttribute('class', "cardHeader");  
                p1.setAttribute('class', "cardParagraph");  
                p2.setAttribute('class', "cardParagraph");  
                p3.setAttribute('class', "cardParagraph");                  
                
                /*
                 Final appendings
                */ 
                card.appendChild(picture);
                card.appendChild(h2);
                card.appendChild(h3);            
                card.appendChild(p1);            
                card.appendChild(p2);            
                card.appendChild(p3);            
                document.querySelector('#cards').appendChild(card);
            }
        }
    });