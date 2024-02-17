console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword

let xhr = new XMLHttpRequest();


function callback(){
// create a callback function to fire when the onreadystatechange happens
    // check that the state is done
    if(xhr.readyState === 4){
        if (xhr.status === 200) {
            // turn into json
            let jsonResponse = JSON.parse(xhr.responseText);

            // console log to see what we have
            console.log(jsonResponse);

            //update the 1st image
            let image1 = jsonResponse.products[0].images;
            console.log(image1);
            document.getElementById('photo1').src = image1;

            // update the 1st figcaption
            let figcaption1 = jsonResponse.products[0].description;
            console.log(figcaption1);
            document.getElementById('fig1').innerText = figcaption1;

            // update the 2nd image
            let image2 = jsonResponse.products[1].images;
            console.log(image2);
            document.getElementById('photo2').src = image2;

            // update the 2nd figcaption
            let figcaption2 = jsonResponse.products[1].description;
            console.log(figcaption2);
            document.getElementById('fig2').innerText = figcaption2;

        }else{
            // send error message
            document.getElementById('images').innerText = 'There is an error';
        }
        
            
    }
            
}
  
xhr.onreadystatechange = callback;

// use the .open() method to configure the object
xhr.open('GET', "../scripts/products.json");
// add datatype to header
xhr.setRequestHeader('Content-Type', 'application/json');

// use the .send() method to send the request
xhr.send();