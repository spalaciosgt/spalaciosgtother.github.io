// Companies JSON source
const requestURL = 'https://spalaciosgt.github.io/gccc/json/directory.json';

// Fetch function
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {        
        console.table(jsonObject); 

        // Loading JSON object into companies object array
        const companies = jsonObject['companies'];

         // Loop for rendering each companie card
         for (let i = 0; i < companies.length; i++) {            
            /*
                Adding tags
            */

            // Div
            let card = document.createElement('div');

            // Picture                        
            let picture = document.createElement('img');

            // Information
            let h2 = document.createElement('h2');
            let s1 = document.createElement('span');
            let s2 = document.createElement('span');
            let s3 = document.createElement('a');

            /*
             Setting attributes
            */

            // Card
            card.setAttribute('class', 'cardCompany'); 

            // Picture
            picture.setAttribute('src', "images/" + companies[i].logoFile);
            picture.setAttribute('loading', 'lazy');
            picture.setAttribute('alt', companies[i].name + ' (' + companies[i].shortName + ' )');  
            picture.setAttribute('class', 'imageCardCompany');                      

            // Information
            h2.setAttribute('class', 'headCardCompany'); 
            s1.setAttribute('class', 'spanCardCompany');
            s2.setAttribute('class', 'spanCardCompany');
            s3.setAttribute('class', 'linkCardCompany');
            h2.textContent = companies[i].name + ' (' + companies[i].shortName + ')';
            s1.textContent = companies[i].contactCenter;
            s2.textContent = companies[i].contactEmail;
            s3.textContent =  companies[i].contactPage;
            s3.href =  companies[i].contactPage;
            s3.target =  '_New';

            /*
                Final appendings
            */ 
             card.appendChild(picture);
             card.appendChild(h2);            
             card.appendChild(s1);            
             card.appendChild(s2);            
             card.appendChild(s3);            
             document.querySelector('#directory').appendChild(card);  
         }
    });
