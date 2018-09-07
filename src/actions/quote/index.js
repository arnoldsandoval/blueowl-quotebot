import ContentService from '../../services/ContentService'

export function getQuote() {
  return (dispatch) => {
    ContentService.get('quote')
      .then((response) => {
        const quote = {
          id: response.data[0].ID,
          title: response.data[0].title,
          content: response.data[0].content,
          link: response.data[0].link
        }

        dispatch({
          type: 'SAVE_NEW_QUOTE',
          payload: quote
        })
        dispatch({
          type: 'SAVE_QUOTE_TO_PREVIOUS',
          payload: quote
        })
      })
  }
}
