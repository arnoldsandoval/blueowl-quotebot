function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    return response.json()
}
  class ContentService {
    static get(type = 'quote') {
      let endpoint = `https://quotebot-content-service-eogwekxixy.now.sh/${type}`

      return fetch(endpoint)
        .then(handleErrors)
        .then(function(json) {
            console.log('parsed json', json)
            return json
        })
    }
  }


  export default ContentService
