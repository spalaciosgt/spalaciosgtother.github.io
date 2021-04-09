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
        const companies = jsonObject['companinies'];

        alert(companies);
    });
