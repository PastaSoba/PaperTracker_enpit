export default function getPaperCitationCount(doi){
    // var search_url = 'https://api.semanticscholar.org/v1/paper/' + doi
  
    /* Searching through API 
    */
    // fetch(search_url)
    //   .then(response => response.json())
    //   .then(data => {
    //       console.log("citations:" + data["citations"])
    //       return Math.floor(Math.random()*201)
    //     }
    //   )
    //   .catch(error=> console.log(error))
    return Math.floor(Math.random()*201)
  }