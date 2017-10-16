
        export const getBarListWithQuery = (query) => {
          return fetch(`https://api.foursquare.com/v2/venues/search?client_id=41KGRFSA3B4F0BXDCCC0ZIQRQCSLXLKGQ1CUN4O0H1KEQEFU&client_secret=JRZKJVMPKAQUNT54MRFQZAGWN4PD3OIM4S1GQWY34DON0USG&near=Bordeaux&v=20171010&categoryId=4bf58dd8d48988d116941735&limit=10&query=${query}`)
          .then((response) => response.json())
          .then((responseJson) => {
            return(responseJson.response.venues)
          })
          .catch((error) => {
            console.error(error);
          });
        }



