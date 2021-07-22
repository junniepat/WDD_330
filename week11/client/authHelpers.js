export async function makeRequest()

// server url
// const baseURL = 'http://127.0.0.1:3000/';

// function to get the url
// function getJSON(url) {
//     return fetch(url)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }

//helper function using fetch for http request
async function makeRequest(url, method = 'GET', body = null) {
    let options = {
        method: method, headers: {
            'Content-Type': 'application/json'
        }
    };

    //data being sent with request
    if (method == 'POST' || method == "PUT") {
        options.body = JSON.stringify(body);
    } 

    //respons and data variables
    const response = await fetch(baseURL + url, options);
    const data = await response.json();

    //check if response is there 
    if (!reponse.ok) {
        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
    } else return data;
}
