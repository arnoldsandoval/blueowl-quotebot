import ContentService from '../../services/ContentService'

export function getUserIp() {
  return (dispatch) => {
    ContentService.get('ip')
      .then((response) => {
        dispatch({
          type: 'SAVE_USER_IP',
          payload: response.data.geoplugin_request
        })
      })
  }
}
