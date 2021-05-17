import axios from "axios"
import { Dispatch } from "react"
import { TextAction, TextActionTypes } from "../../types/text"

export const fetchText = () => {
  return async (dispatch: Dispatch<TextAction>) => {
    try {
      dispatch({ type: TextActionTypes.FETCH_TEXT})
      const response = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1');
      dispatch({ type: TextActionTypes.FETCH_TEXT_SUCCESS, payload: response.data[0]});
    } catch (e) {
      dispatch({ type: TextActionTypes.FETCH_TEXT_ERROR, payload: 'Произошла ошибка при загрузке текста'})
    }
  }
}