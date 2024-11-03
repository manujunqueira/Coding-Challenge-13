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


// Task 3 - Display Product Details Dynamically

function displayProducts(data) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear existing content if needed

    // Iterate through each product and create HTML elements
    data.forEach(item => {
        const { name, price, company, image } = item.fields;

        // Create a container for each product and use innerHTML for easy formatting
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Add a class for styling if needed
        productDiv.innerHTML = `
            <img src="${image[0].url}" alt="${name}" />
            <h2>${name}</h2>
            <p>Company: ${company}</p>
            <p>Price: $${(price / 100).toFixed(2)}</p>
        `;

        // Append the product div to the main container
        productsContainer.appendChild(productDiv);
    });
}
