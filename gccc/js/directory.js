// Companies JSON source
const requestURL = './directory.json';

// Fetch function
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {        
        console.table(jsonObject); 

        // Loading JSON object into companies object array
        const companies = jsonObject['companines'];

        alert(companies);
    });
