export interface TextState {
  text: string,
  loading: boolean,
  error: null | string,
}

export enum TextActionTypes {
  FETCH_TEXT = 'FETCH_TEXT',
  FETCH_TEXT_SUCCESS = 'FETCH_TEXT_SUCCESS',
  FETCH_TEXT_ERROR = 'FETCH_TEXT_ERROR',
}

export interface FetchTextAction {
  type: TextActionTypes.FETCH_TEXT
}

export interface FetchTextSuccessAction {
  type: TextActionTypes.FETCH_TEXT_SUCCESS,
  payload: string,
}

export interface FetchTextErrorAction {
  type: TextActionTypes.FETCH_TEXT_ERROR,
  payload: string,
}

export type TextAction = FetchTextAction | FetchTextSuccessAction | FetchTextErrorAction;
