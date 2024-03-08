/**
 * ADD HEADER COMMENTS WITH YOUR NAME + DATE
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42760966-a310885212f00fac56883d89c'; // normally we would load a key through the .env file

// Constant for image count
const IMAGES_PER_PAGE = 30;
const QUERY = 'dogs';
const ORIENTATION = 'horizontal';

// URL for Pixbay request
const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${QUERY}&image_type=photo&orientation=${ORIENTATION}&per_page=${IMAGES_PER_PAGE}`;

/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = () => 
{
        $.ajax({
            url: PIXABAY_URL,
            method: "GET",
            dataType: "json",
            success: function (data) {
                // Process the retrieved data and dynamically create HTML elements
                data.hits.forEach(function (image) {

                     // use bootstrap cards and append to
                    // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
                    const card = $("<div>").addClass("col-md-9 mb-3 mx-auto");
                     // create card
                    const cardInner = $("<div>").addClass("card");
                    
                    // card body
                    const cardBody = $("<div>").addClass("card-body");
                    // card title
                    const cardTitle = $("<h5>").addClass("card-title").text(image.tags);
                    // image
                    const imgElement = $("<img>").addClass("card-img-top").attr("src", image.webformatURL).attr("alt", image.tags);
                    // card text
                    const cardText = $("<p>").addClass("card-text").text("Tags: " + image.tags);

                    cardBody.append(cardTitle, cardText);
                    cardInner.append(imgElement, cardBody);
                    card.append(cardInner);


                    cardBody.append(cardTitle, cardText);
                    card.append(imgElement, cardBody);

                    $(".blog-column").append(card);
                });
            },
            error: function (error) {
                console.error("Error fetching data from Pixabay API:", error);
            }
        });

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // use fetch to get the pictures from the API
    
    fetch(PIXABAY_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the retrieved data and handle it as needed
        console.log('Pixabay API Data:', data);
    })
    // handle error(s) with .catch()
    .catch(error => {
        console.error('Error fetching data from Pixabay API:', error);
    });

};

getPictures();

makePosts();
