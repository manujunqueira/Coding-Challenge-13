// Task 2 - Fetch Products from the API Using Fetch and Promises

const productContainer = document.getElementById('product-container');

//fetch products from the API
function fetchProducts() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then((response) => {
            if (!response.ok) { // cheking if reponse is successfull 
                throw new Error('Network response was not ok');
            }
            return response.json(); //used json string 
        })
        .then((data) => { // this will display the product's details if the fetch worked
            displayProducts(data);
        })

// Task 4 - Handle Errors Gracefully
        .catch((error) => {
            productContainer.innerHTML = '<p>Failed to load product details. Please try again later.</p>'; //display message
            console.error('There has been a problem with your fetch operation:', error); //console log the error 
        });
}

fetchProducts();
