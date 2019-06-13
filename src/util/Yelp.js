const apiKey = "m6QDa-PmxUOAmZEGaftZ-142DVcaUruT0TpOhbj0xwv0_UOxCYdwxvBbk4ccCFtz9EYOSmAYyOTyzis8JG04t0NNiFCbwTkqA46SsDPTuVXHKSvrn5TdnpYrMa0CXXYx";

let Yelp = {
  search(term, location, sortBy){
    let urlToFetch = "https://cors-anywhere.herokuapp.com/"+`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    let headers = {Authorization:`Bearer ${apiKey}`}
    return fetch(urlToFetch, {headers:headers}).then(response => response.json()).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
          id:business.id,
          imageSrc:business.image_url,
          name:business.name,
          address:business.location.address1,
          city:business.location.city,
          state:business.location.state,
          zipCode:business.location.zip_code,
          category:business.categories,
          rating:business.rating,
          reviewCount:business.review_count,
          url:business.url
        }});
      }
    });
  },
}

export default Yelp;
