const apiKey = 'pNUUtdTjrkfUQQ6oulCCXktMcftn4rR1VUc2uKWt0uxxqOeoHUUvzS_CorL4NtLvK_TDzR7xYaNYy7W8umfbNPPKdHexEmhvZs9mZl1blmePnovnY9AT2CirAR_tXnYx';

const Yelp = {
    search(term, location, sortBy) {
            /* to bypass the CORS restriction, use CORS Anywhere */
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                // console.log(jsonResponse.businesses)
                return jsonResponse.businesses.map(business => {    
                    return {
                        id: business.id,                            /* https://www.yelp.com/developers/documentation/v3/business_search */
                        imageSrc: business.image_url,
                        url: business.url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                }); 
            }
        });
    },   

    // autoComplete(text, latitude, longitude) {
    //     return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=${text}&latitude=${latitude}&longitude=${longitude}`, {
    //         headers: {
    //             Authorization: `Bearer ${apiKey}`
    //         }
    //     }).then(response => {
    //         return response.json();
    //     }).then(jsonResponse => {
    //         console.log(jsonResponse) 
    //     })
    // }
};

export default Yelp;



/* Example would be: (taken from App.js) */
// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ];