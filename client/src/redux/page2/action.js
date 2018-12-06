export const GET_INFO_SUCCESS = 'page2/GET_INFO_SUCCESS'
export const GET_INFO_FAIL = 'page2/GET_INFO_FAIL'

export function getInfo() {
    return function (dispatch) {
        return fetch('http://localhost:9999/api/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch({
                        type: GET_INFO_SUCCESS,
                        payload: json
                    })
                }
            ).catch(
                () => {
                    dispatch({
                        type: GET_INFO_FAIL
                    })
                }
            )
    }
}
