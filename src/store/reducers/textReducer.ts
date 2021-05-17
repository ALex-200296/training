import { TextAction, TextActionTypes, TextState } from "../../types/text"

const initialState: TextState = {
  text: '',
  loading: false,
  error: null,
}

export const textReducer = (state = initialState, action: TextAction): TextState => {
  switch(action.type) {
    case TextActionTypes.FETCH_TEXT:
      return { loading: true, error: null, text: '' }
    case TextActionTypes.FETCH_TEXT_SUCCESS:
      return { loading: false, error: null, text: action.payload }
    case TextActionTypes.FETCH_TEXT_ERROR:
      return { loading: false, error: action.payload, text: '' }
    default:
      return state
  }
}