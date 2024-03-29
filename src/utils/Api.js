        /**
        * This function get the list of bars for a specified query.
        * @param {string} query - the string you want to search.
        */
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

        /**
         * This function get the infos of a bar for a specified ID.
         * @param {number} id - the ID of the venue you want to get the infos.
         */
        export const getBarInfo = (id) => {
            return fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=41KGRFSA3B4F0BXDCCC0ZIQRQCSLXLKGQ1CUN4O0H1KEQEFU&client_secret=JRZKJVMPKAQUNT54MRFQZAGWN4PD3OIM4S1GQWY34DON0USG&v=20171010`)
            .then((response) => response.json())
            .then((responseJson) => {
              return(responseJson.response.venue)
            })
            .catch((error) => {
              console.error(error);
            });
          }

