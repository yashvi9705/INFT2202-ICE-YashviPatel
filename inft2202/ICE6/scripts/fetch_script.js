console.log("fetch_script.js loaded");

// get the button for xhr
let btn_fetch = $("#fetchJoke");
// create a url variable
let url_fetch = "https://icanhazdadjoke.com/"
//need a header Accept value set to 'application/json'
let MyFetchHeader = {"Accept" : "application/json"}

// create the callback for the click
$(btn_fetch).click(() => {
    // use fetch
    fetch(url_fetch, {
        // give the necessary header data
        headers: MyFetchHeader
    })// first then() to recieve the promise
    .then((result) => {
        // send the json from the promise on to the next then()
        return result.json();
    })
    .then((jsonRes) => {
        // console log the json
        console.log(jsonRes);
        // set the output
        $('#output').text(jsonRes.joke); 

    })           
            
});
    

